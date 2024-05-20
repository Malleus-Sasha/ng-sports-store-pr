import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExmplsComponent } from './exmpls.component';
import { FirstExmplComponent } from './first-exmpl/first-exmpl.component';

const routes: Routes = [
  { 
    path: '',
    component: ExmplsComponent, 
    children: [
      { path: 'first-exmpl', component: FirstExmplComponent },
    ], 
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExmplsRoutingModule { }
