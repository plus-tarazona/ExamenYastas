import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DishDetailComponent } from './dish-detail/dish-detail.component';
import { DishSearchComponent } from './dish-search/dish-search.component';
import { PopularIngredientsComponent } from './popular-ingredients/popular-ingredients.component';

const routes: Routes = [
  {
    path: 'dish-detail/:id',
    component: DishDetailComponent
  },
  {
    path: 'popular-ingredients',
    component: PopularIngredientsComponent
  },
  {
    path: 'dish-search',
    component: DishSearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MealRoutingModule { }
