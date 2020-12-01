import { Component, OnInit } from '@angular/core';

import { BooksService } from './core/services/books.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	public books$: any;

	constructor(
		public booksService: BooksService
	) { }

	ngOnInit(): void {
		this.books$ = this.booksService.getList();
	}
}
