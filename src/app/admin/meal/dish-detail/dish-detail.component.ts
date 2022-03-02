import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { DishHttp } from '../../commons/http/dish.http';
import { IDish } from '../../commons/interfaces/dish.interface';

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.scss']
})
export class DishDetailComponent implements OnInit {
  id: number;
  dish: IDish | null;

  constructor(
    private route: ActivatedRoute,
    private dishHttp: DishHttp,
    private _sanitizer: DomSanitizer
  ) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.dish = null;
  }

  ngOnInit(): void {
    this.dishHttp.getOne(this.id).subscribe(res => this.dish = res);
  }

}
