import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test.component';
import { Routes } from '@angular/router';

// const routes: Routes = [

//   { path: '', component: TestComponent}
// ];

@NgModule({
  declarations: [
    TestComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TestModule { }
