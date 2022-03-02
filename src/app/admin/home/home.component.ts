import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs';
import { YtsSweetAlertService } from 'src/app/commons/services';
import { DishDayModalComponent } from '../commons/components/dish-day-modal/dish-day-modal.component';
import { DishHttp } from '../commons/http/dish.http';
import { IDish } from '../commons/interfaces/dish.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private dialog : MatDialog,
    private dishHttp: DishHttp,
    private router: Router,
    private activatedRoute : ActivatedRoute,
    private alert: YtsSweetAlertService
  ) { }

  ngOnInit(): void {
    this.getDishDay();
  }

  getDishDay(): void {
    this.alert.showLoading();
    this.dishHttp
      .getRandom()
      .pipe(finalize(() => this.alert.closeLoading()))
      .subscribe(res => this.openModal(res));
  }

  openModal(dishDayData: IDish): void {
    const dialogRef = this.dialog.open(DishDayModalComponent, {
      data: dishDayData,
      disableClose: true,
    });

    dialogRef
      .afterClosed()
      .subscribe(res => {
        if(res) this.goToDishDetail(res)
      });
  }

  goToDishDetail(id: number): void {
    this.router.navigate(['meal/dish-detail', id], {relativeTo: this.activatedRoute});
  }
}
