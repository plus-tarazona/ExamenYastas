import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { DishHttp } from '../../commons/http/dish.http';
import { IDish } from '../../commons/interfaces/dish.interface';

@Component({
  selector: 'app-dish-search',
  templateUrl: './dish-search.component.html',
  styleUrls: ['./dish-search.component.scss']
})
export class DishSearchComponent implements OnInit {
  form: FormGroup;
  dataSource: MatTableDataSource<IDish>;
  displayedColumns: string[];
  maxLenInstructions: number;

  get textControl(): FormControl {
    return this.form.get('text') as FormControl;
  }

  constructor(
    private fb: FormBuilder,
    private dishHttp: DishHttp,
    private router: Router,
    private activatedRoute : ActivatedRoute,
  ) {
    this.form = this.fb.group({
      text: ['']
    });
    this.dataSource = new MatTableDataSource();
    this.displayedColumns = [
      'nro',
      'name',
      'category',
      'instructions',
      'view',
    ];
    this.maxLenInstructions = 50;
  }

  ngOnInit(): void {
    this.onSearch();
  }

  onClearFilters(): void {
    this.form.patchValue({
      text: ''
    });
    this.onSearch();
  }

  onSearch(): void {
    const textSearch = this.textControl.value;
    this.dishHttp
      .search(textSearch)
      .subscribe(res => this.dataSource = new MatTableDataSource(res));
  }

  goToViewDetail(id: number): void {
    this.router.navigate(['../dish-detail', id], {relativeTo: this.activatedRoute});
  }

}
