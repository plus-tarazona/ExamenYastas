import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MatCardModule } from '@angular/material/card';

const MATERIAL_MODULES = [
  MatCardModule
];

@NgModule({
  declarations: [
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ...MATERIAL_MODULES
  ]
})
export class UserModule { }
