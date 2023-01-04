import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';
import { AuthGuard } from './auth.guard';
import { CanloadGuard } from './canload.guard';

const routes: Routes = [ 
  {path: '', redirectTo: '/departments', pathMatch: 'full'},
  { path: 'departments', component: DepartmentListComponent},
  {
    path: 'departments/:id', 
    component: DepartmentDetailComponent,
    canActivate: [AuthGuard],
    children: [
      {path: 'overview', component: DepartmentOverviewComponent},
      {path: 'contact' , component: DepartmentContactComponent}
    ]
  },
  {path: 'employees', component: EmployeeListComponent},
  {path: "admin", loadChildren: () => import( './admin/admin.module').then(m => m.AdminModule),canLoad: [CanloadGuard]},
  {path: "test", loadChildren: () => import('./test/test.module').then(m => m.TestModule),canLoad: [CanloadGuard]},
  {path:'**', component: PageNotFoundComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents= [DepartmentListComponent, EmployeeListComponent, PageNotFoundComponent]
