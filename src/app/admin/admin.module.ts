import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { MatToolbar } from '@angular/material/toolbar';
import { MaterialDesign } from '../material/material';
import { GalleryComponent } from './gallery/gallery.component';
import { ProductComponent } from './product/product.component';


const router: Routes = [
  { 
    path: '', 
    component: AdminComponent,
    children: [
      {
        path:'dashboard',
        component: DashboardComponent 
      },
      {
        path:'product',
        component: ProductComponent
      },
      {
        path:'',
        pathMatch:'full',
        redirectTo:'/admin/dashboard'
      }
    ]
  }
]

@NgModule({
  declarations: [AdminComponent, DashboardComponent, GalleryComponent, ProductComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(router),
    // Agar material design terdeteksi maka harus ditambahkan material toolbar disini
    MaterialDesign
  ]
})
//menggunakan for child karena diatasnya masih ada module
export class AdminModule { }
