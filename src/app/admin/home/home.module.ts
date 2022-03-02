import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { AdminDishDayModalModule } from '../commons/components/dish-day-modal/dish-day-modal.module';
import { MatDialogModule } from '@angular/material/dialog';
import { HomeRoutingModule } from './home-routing.module';

const MATERIAL_MODULES = [
  MatDialogModule
];

const LIB_MODULES = [
  AdminDishDayModalModule
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ...MATERIAL_MODULES,
    ...LIB_MODULES
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
