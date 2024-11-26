import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutPageComponent } from './pages/layout-page/layout-page-book.component';
import { BookRoutingModule } from './book-routing.module';



@NgModule({
    imports: [BookRoutingModule, MaterialModule, CommonModule, ReactiveFormsModule],
    exports: [],
    declarations: [LayoutPageComponent],
    providers: [],
})
export class BookModule { }
