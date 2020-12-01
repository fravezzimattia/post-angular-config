import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { BooksService } from './services';
import { AppConfigGetter, AppConfigInizializer, AppConfigLoader } from './loaders';

@NgModule({
	imports: [
		CommonModule,
		HttpClientModule
	],
	providers: [
		AppConfigLoader,
		AppConfigInizializer,
		AppConfigGetter,
		
		BooksService
	]
})
export class CoreModule { }
