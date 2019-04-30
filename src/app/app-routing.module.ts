import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Win1Component } from './win1/win1.component';
import { Win2Component } from './win2/win2.component';

const routes: Routes = [

  {
    path: 'win1',
    component: Win1Component
},
{
  path: 'win2',
  component: Win2Component
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
