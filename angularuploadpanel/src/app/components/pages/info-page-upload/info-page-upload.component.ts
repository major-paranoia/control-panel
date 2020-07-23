import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { ArticlesService } from '../../../services/articles.service';
import { CategoriesService } from 'src/app/services/categories.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-info-page-upload',
  templateUrl: './info-page-upload.component.html',
  styleUrls: ['./info-page-upload.component.css']
})
export class InfoPageUploadComponent implements OnInit {

  titleControl = new FormControl('', Validators.required);
  contentControl = new FormControl('', Validators.required);
  fullImageControl = new FormControl('', Validators.required);
  categoriesIdControl = new FormControl('', Validators.required);
  categoryTitleControl = new FormControl('', Validators.required);

  constructor(private articleService:ArticlesService, private categoriesService: CategoriesService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  onSubmit(){
    const category = {
      title: this.categoryTitleControl.value,
      categoryId: this.categoriesIdControl.value,
      categoryType: 'info'
    }

    this.categoriesService.addCategory(category).subscribe();

    const article = {
      title: this.titleControl.value,
      content: this.contentControl.value,
      fullImage: `api/images/image/${this.fullImageControl.value}`,
      categoriesId: this.categoriesIdControl.value
    }

    this.articleService.addInfoPage(article).subscribe();
    this.openSnackBar();
  }
  
  openSnackBar() {
    this._snackBar.open('Страница успешно загружена', 'ИНФО', {
      duration: 3000,
    });
  }

}
