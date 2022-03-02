import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { AdminServicesModule } from '../../services/services.module';
import {MatButtonModule} from '@angular/material/button';
import { YtsSessionModule } from 'src/app/commons/services';

const ANGULAR_MODULES = [
  CommonModule,
  RouterModule
];

const MATERIAL_MODULES = [
  MatIconModule,
  MatButtonModule
];

const COMPONENTS = [
  MenuComponent
];

const LIB_MODULES = [
  AdminServicesModule,
  YtsSessionModule
]

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    ...ANGULAR_MODULES,
    ...MATERIAL_MODULES,
    ...LIB_MODULES
  ],
  exports: [...COMPONENTS]
})
export class AdminMenuModule { }
