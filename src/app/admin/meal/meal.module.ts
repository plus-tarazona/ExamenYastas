import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MealRoutingModule } from './meal-routing.module';
import { DishDetailComponent } from './dish-detail/dish-detail.component';
import { PopularIngredientsComponent } from './popular-ingredients/popular-ingredients.component';
import { DishSearchComponent } from './dish-search/dish-search.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

const ANGULAR_MODULES = [
  CommonModule,
  ReactiveFormsModule,
  FormsModule
];

const MATERIAL_MODULES = [
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatTableModule
];

@NgModule({
  declarations: [
    DishDetailComponent,
    PopularIngredientsComponent,
    DishSearchComponent
  ],
  imports: [
    ...ANGULAR_MODULES,
    MealRoutingModule,
    ...MATERIAL_MODULES
  ]
})
export class MealModule { }
