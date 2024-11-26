import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, switchMap } from 'rxjs';
import { Book } from '../../interfaces/book.interface';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'book-page',
  templateUrl: 'book-page.component.html',
})
export class BookPageComponent implements OnInit {
  public book!: Book;

  constructor(
    private _bookService: BookService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {}
  ngOnInit(): void {
    this._activatedRoute.params
      .pipe(
        delay(500),
        switchMap(({ id }) => this._bookService.getBookById(id)))
      .subscribe((book) => {
        if (!book) return this._router.navigate(['/list']);
        this.book = book;
        return;
      });
  }

  goBack(): void {
    this._router.navigateByUrl('/list');
  }

  goToEdit():void{
   this._router.navigateByUrl(`/edit/${this.book.id}`)
  }
}
