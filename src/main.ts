import { enableProdMode, LOCALE_ID } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { StartupConfig } from './app/core/configs/startup-config';

fetch('/assets/configs/startup.json')
	.then((response) => response.json())
	.then((config) => {
		if (environment.production) {
			enableProdMode()
		}

		platformBrowserDynamic([{ provide: StartupConfig, useValue: config }])
			.bootstrapModule(AppModule)
			.catch(err => console.error(err))
	})
