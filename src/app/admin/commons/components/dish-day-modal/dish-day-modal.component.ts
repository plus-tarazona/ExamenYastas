import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IDish } from '../../interfaces/dish.interface';

@Component({
  selector: 'app-dish-day-modal',
  templateUrl: './dish-day-modal.component.html',
  styleUrls: ['./dish-day-modal.component.scss']
})
export class DishDayModalComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IDish,
    public dialogRef: MatDialogRef<DishDayModalComponent>,
  ) { }

  ngOnInit(): void {
    console.log('data', this.data);
  }

  seeMore(): void {
    this.dialogRef.close(this.data.idMeal);
  }
}
