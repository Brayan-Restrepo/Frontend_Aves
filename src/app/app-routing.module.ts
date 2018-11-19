import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AvesComponent } from './pages/aves/aves.component';

const routes: Routes = [
  { path: 'aves', component: AvesComponent },
  { path: '', pathMatch: 'full', redirectTo: '/aves' },
  { path: '**', component: AvesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
