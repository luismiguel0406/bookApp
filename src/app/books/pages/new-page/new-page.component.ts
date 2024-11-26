import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { MatSnackBar } from '@angular/material/snack-bar';
import { BookService } from '../../services/book.service';
import { Book } from '../../interfaces/book.interface';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'new-page',
  templateUrl: 'new-page.component.html',
})
export class NewPageComponent implements OnInit{
  public bookFormGroup = new FormGroup({
    id: new FormControl(0),
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    pageCount: new FormControl(0, Validators.required),
    excerpt: new FormControl('', Validators.required),
    publishDate: new FormControl('', Validators.required),
   
  });
  public titleForm:string = 'Agregar Libro';

  constructor(
    private _bookService: BookService,
    public _router: Router,
    private _dialog: MatDialog,
    private _activatedRoute: ActivatedRoute,
    private _snackBar: MatSnackBar
  ) {}
  ngOnInit(): void {
    if(!this._router.url.includes("edit")) return;
    
    this.titleForm = "Editar Libro"
    this._activatedRoute.params.subscribe(
      ({id})=>{
        this._bookService.getBookById(id).subscribe(book=>{

          if(!book){
            return this._router.navigateByUrl('/')
          }
          this.bookFormGroup.reset(book)
          return;
        })
      }
    )
  }

  get currentBook(): Book {
    var book = this.bookFormGroup.value as Book;
    return book;
  }


  addBook() {
    if (!this.bookFormGroup.valid) return ;
    this._bookService.addBook(this.currentBook).subscribe(() => {
      this._snackBar.open("Libro creado!","Ok")
      this.bookFormGroup.reset();
    });
  }

  deleteBook(id: number = this.currentBook.id!): void {
    const confirmDialog = this._dialog.open(ConfirmDialogComponent);

    confirmDialog.afterClosed().subscribe((result) => {
      if (!result) return;
      this._bookService
        .deleteBook(id)
        .subscribe(() => this._router.navigateByUrl(''));
    });
  }

  updateBook(): void {
    if (!this.bookFormGroup.touched) {
        this._snackBar.open("No hay cambios que guardar!","Ok")
        return;
    };

    this._bookService
      .updateBook(this.currentBook.id!, this.currentBook)
      .subscribe(() => this._snackBar.open("Libro actualizado!","Ok"));
  }
}
