import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page-book.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { BookPageComponent } from './pages/book-page/book-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';

const routes :Routes = [
    {
        path:'',
        component:LayoutPageComponent,
        children:[
            {
                path: 'list',
                component: ListPageComponent
            },
            {
                path: 'new',
                component: NewPageComponent
            },
            {
                path: ':id',
                component: BookPageComponent
            },
            {
                path: 'edit/:id',
                component: NewPageComponent
            },
           
            {
                path: '**',
                redirectTo: 'list'
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BookRoutingModule { }
