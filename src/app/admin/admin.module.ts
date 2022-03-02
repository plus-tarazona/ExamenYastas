import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

import { YtsSweetAlertModule } from '../commons/services';
import { AdminHttpModule } from './commons/http/http.module';
import { AdminComponent } from './admin.component';
import { AdminMenuModule } from './commons/components/menu/menu.module';

const LIB_MODULES = [
  YtsSweetAlertModule,
  AdminHttpModule,
  AdminMenuModule
];

@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    LIB_MODULES,
  ]
})
export class AdminModule { }
