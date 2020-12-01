import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { httpOptionsJson } from '../helpers';

export class CrudService<T> {

	constructor(
		public httpClient: HttpClient,
		public baseUrl: string,
		public endpoint: string
	) { }

	public get(id: number): Observable<T> {
		return this.httpClient
			.get(`${this.baseUrl}${this.endpoint}\\${id}`)
			.pipe(map((data: any) => data as T));
	}

	public getList(): Observable<T[]> {
		return this.httpClient
			.get(`${this.baseUrl}${this.endpoint}`)
			.pipe(map((data: any) => this.convertData(data)));
	}

	public post(item: T): Observable<T> {
		return this.httpClient
			.post<T>(`${this.baseUrl}${this.endpoint}`, JSON.stringify(item), httpOptionsJson())
			.pipe(map((data: any) => data as T));
	}

	public update(item: T): Observable<T> {
		return this.httpClient
			.put<T>(`${this.baseUrl}`, JSON.stringify(item))
			.pipe(map((data: any) => data as T));
	}

	public delete(id: number) {
		return this.httpClient
			.delete(`${this.baseUrl}${id}`);
	}

	protected convertData(data: any): T[] {
		return data.map(item => item as T);
	}
}
