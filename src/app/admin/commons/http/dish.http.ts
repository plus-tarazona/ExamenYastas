import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { IDish } from "../interfaces/dish.interface";
import { IRandomDishResponse } from "../interfaces/random-dish-response.interface";
import { AdminHttpModule } from "./http.module";

@Injectable({
  providedIn: AdminHttpModule
})
export class DishHttp {
  private _endpoint = `${environment.apiMeal}/v1/1`;

  constructor(private http : HttpClient) { }

  getRandom(): Observable<IDish>{
    return this.http
      .get<IRandomDishResponse>(`${this._endpoint}/random.php`)
      .pipe(
        map(res => res.meals[0])
    );
  }

  getOne(id: number): Observable<IDish>{
    return this.http
      .get<IRandomDishResponse>(`${this._endpoint}/lookup.php?i=${id}`)
      .pipe(
        map(res => res.meals[0])
    );
  }

  search(text: string): Observable<IDish[]>{
    return this.http
      .get<IRandomDishResponse>(`${this._endpoint}/search.php?s=${text}`)
      .pipe(
        map(res => res.meals)
    );
  }
}
