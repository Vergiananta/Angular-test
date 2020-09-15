import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PublicComponent} from './public.component';

const router: Routes = [
  {
    path: '', 
    component: PublicComponent,
    children: [
      {
        path:'home',
        component: HomeComponent 
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(router)
  ]
})
export class PublicModule { }
