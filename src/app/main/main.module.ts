import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { TabsComponent } from './tabs/tabs.component';
import { SettingComponent } from './setting/setting.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    component: TabsComponent,
    children: [
      {
        path:'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(d => d.DashboardModule)
      },
      {
        path: 'settings',
        component: SettingComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    TabsComponent,
    SettingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class MainModule { }
