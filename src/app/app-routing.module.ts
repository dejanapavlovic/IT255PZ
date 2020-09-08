import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
{
  path: '',
  redirectTo: 'books',
  pathMatch: 'full'
},
{
  path: 'books',
  loadChildren: () => import('./book/book.module').then(b => b.BookModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
