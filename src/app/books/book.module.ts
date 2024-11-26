import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutPageComponent } from './pages/layout-page/layout-page-book.component';
import { BookRoutingModule } from './book-routing.module';
import { BookCardComponent } from './components/card/book-card.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { BookPageComponent } from './pages/book-page/book-page.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { NewPageComponent } from './pages/new-page/new-page.component';



@NgModule({
    imports: [BookRoutingModule, MaterialModule, CommonModule, ReactiveFormsModule],
    exports: [],
    declarations: [LayoutPageComponent, BookCardComponent, ListPageComponent, BookPageComponent, ConfirmDialogComponent, NewPageComponent],
    providers: [],
})
export class BookModule { }
