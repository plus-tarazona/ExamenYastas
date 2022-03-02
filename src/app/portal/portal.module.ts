import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PortalRoutingModule } from './portal-routing.module';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { YtsSessionModule, YtsSweetAlertModule } from '../commons/services';

import { SignInComponent } from './components/sign-in/sign-in.component';
import { PortalHttpModule } from './commons/http/http.module';

const ANGULAR_MODULES = [
  CommonModule,
  ReactiveFormsModule,
  FormsModule
];

const MATERIAL_MODULES = [
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule
];

const LIB_MODULES = [
  YtsSweetAlertModule,
  YtsSessionModule,
  PortalHttpModule
];

const COMPONENTS = [
  SignInComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    ...ANGULAR_MODULES,
    PortalRoutingModule,
    ...MATERIAL_MODULES,
    ...LIB_MODULES,
  ]
})
export class PortalModule { }
