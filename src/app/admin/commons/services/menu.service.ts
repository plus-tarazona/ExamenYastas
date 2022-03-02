import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { AdminServicesModule } from "./services.module";

@Injectable({
  providedIn: AdminServicesModule,
})
export class MenuService {
  optionSelected: Subject<void> = new Subject<void>();
}