import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DishDayModalComponent } from './dish-day-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

const ANGULAR_MODULES = [
  CommonModule
];

const MATERIAL_MODULES = [
  MatDialogModule,
  MatButtonModule,
];

const COMPONENTS = [
  DishDayModalComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    ...ANGULAR_MODULES,
    ...MATERIAL_MODULES
  ],
  exports: [...COMPONENTS]
})
export class AdminDishDayModalModule { }
