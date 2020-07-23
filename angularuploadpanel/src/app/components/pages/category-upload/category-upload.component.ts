import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { CategoriesService } from 'src/app/services/categories.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-category-upload',
  templateUrl: './category-upload.component.html',
  styleUrls: ['./category-upload.component.css']
})
export class CategoryUploadComponent implements OnInit {

  categoryTitleControl = new FormControl('', Validators.required);
  categoriesIdControl = new FormControl('', Validators.required);

  constructor(private categoriesService: CategoriesService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  onSubmit(){
    const category = {
      title: this.categoryTitleControl.value,
      categoryId: this.categoriesIdControl.value,
      categoryType: 'category'
    }

    this.categoriesService.addCategory(category).subscribe();
    this.openSnackBar();
  }

  openSnackBar() {
    this._snackBar.open('Раздел успешно добавлен', 'РАЗДЕЛЫ', {
      duration: 3000,
    });
  }

}
