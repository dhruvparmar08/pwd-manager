import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';

import { DashboardComponent } from './dashboard.component';
import { AddorEditComponent } from './addor-edit/addor-edit.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: ListComponent
      },
      {
        path: 'add',
        component: AddorEditComponent
      },
      {
        path: 'edit/:id',
        component: AddorEditComponent
      },
      {
        path: 'view/:id',
        component: AddorEditComponent
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'main/dashboard',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    DashboardComponent,
    AddorEditComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class DashboardModule { }
