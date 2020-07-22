import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-category-upload',
  templateUrl: './category-upload.component.html',
  styleUrls: ['./category-upload.component.css']
})
export class CategoryUploadComponent implements OnInit {

  categoryTitleControl = new FormControl('', Validators.required);
  categoriesIdControl = new FormControl('', Validators.required);

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    const category = {
      title: this.categoryTitleControl.value,
      categoryId: this.categoriesIdControl.value,
      categoryType: 'category'
    }

    this.categoriesService.addCategory(category).subscribe();
  }

}
