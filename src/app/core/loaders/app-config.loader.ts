import { APP_INITIALIZER, Injectable } from '@angular/core';
import { HttpBackend, HttpClient } from '@angular/common/http';

import { map, tap } from 'rxjs/operators';

import { AppConfig } from '../configs';
import { environment } from 'src/environments/environment';

@Injectable()
export class AppConfigLoader {
	public config: AppConfig;
	public httpClient: HttpClient;

	public static loaderForFactory(loader: AppConfigLoader) {
		return () => loader.read()
	}

	public static getterForFactory(loader: AppConfigLoader) {
		return loader.config;
	}

	constructor(
		protected handler: HttpBackend
	) {
		this.httpClient = new HttpClient(handler);
	}

	private read() {
		return this.httpClient
			.get(this.getConfigUri())
			.pipe(
				map(x => x as AppConfig),
				tap(res => this.config = res),
			)
			.toPromise()
	}

	private getConfigUri(): string {
		return `./assets/configs/config.json?v=${environment.appVersion}`
	}
}

export let AppConfigInizializer = {
	provide: APP_INITIALIZER,
	useFactory: AppConfigLoader.loaderForFactory,
	deps: [AppConfigLoader],
	multi: true
};

export let AppConfigGetter = {
	provide: AppConfig,
	useFactory: AppConfigLoader.getterForFactory,
	deps: [AppConfigLoader]
};
