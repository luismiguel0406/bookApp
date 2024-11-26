import { Component, OnInit } from "@angular/core";
import { BookService } from "../../services/book.service";
import { Book } from "../../interfaces/book.interface";



@Component({
    selector:'app-list-page',
    templateUrl:'list-page.component.html'
})
export class ListPageComponent implements OnInit{
   public books:Book[] =[]
    constructor(private _bookService:BookService) {
        
    }
    ngOnInit():void {
        this._bookService.getBooks().subscribe(
            
          books => {this.books = books;
            console.log(books);

          }
        )
    }
}