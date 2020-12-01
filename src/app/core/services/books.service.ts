import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AppConfig } from '../configs';
import { CrudService } from './http.service';
import { BookDto } from '../dtos';

@Injectable({
	providedIn: 'root'
})
export class BooksService extends CrudService<BookDto> {
	constructor(
		public httpClient: HttpClient,
		public appConfig: AppConfig
	) {
		super(httpClient, appConfig.baseUrl, appConfig.endpoints.books.baseUrl);
	}
}
