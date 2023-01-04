import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { Routes } from '@angular/router';

// const routes: Routes = [

//   { path: '', component: AdminComponent}
// ];

@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
