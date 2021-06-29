import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialDesign } from '../material/material';
import { ProductComponent } from './product/product.component';
import { ImagesComponent } from './images/images.component';
import { HargaComponent } from './harga/harga.component';
import {MatCardModule} from '@angular/material/card';


const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path:'product',
        component:ProductComponent
      },
      {
        path:'harga',
        component:HargaComponent
      },
      {
        path:'dashboard',
        component:DashboardComponent
      },
      {
        path:'images',
        component:ImagesComponent
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
  declarations: [
    AdminComponent,
    DashboardComponent,
    ProductComponent,
    ImagesComponent,
    HargaComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialDesign,
    MatCardModule
  ]
})
export class AdminModule { }
