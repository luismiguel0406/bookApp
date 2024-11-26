import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../../interfaces/book.interface';

@Component({
    selector: 'book-card',
    templateUrl: 'book-card.component.html'
})

export class BookCardComponent implements OnInit {

    @Input() public book!:Book
    constructor(private _router:Router) { }

    ngOnInit() {
        if(!this.book){throw('hero is required')}
     }

     goToBook(id:Number = 0){
     return this._router.navigateByUrl(`${id}`)
     }
}