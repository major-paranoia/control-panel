import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { ArticlesService } from '../../../services/articles.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-article-upload',
  templateUrl: './article-upload.component.html',
  styleUrls: ['./article-upload.component.css']
})
export class ArticleUploadComponent implements OnInit {

  titleControl = new FormControl('', Validators.required);
  subTextControl = new FormControl('', Validators.required);
  contentControl = new FormControl('', Validators.required);
  previewImageControl = new FormControl('', Validators.required);
  fullImageControl = new FormControl('', Validators.required);
  categoriesIdControl = new FormControl('', Validators.required);
  categories: Category[];


  constructor(private articleService:ArticlesService, private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.categoriesService.getCategoriesByCategoryType('category').subscribe(categories => {
      this.categories = categories;
      this.categories = this.categories.filter(c => c.categoryId !== 'home' && c.categoryId !== 'podcasts');
    });
  }

  onSubmit(){
    const article = {
      title: this.titleControl.value,
      subText: this.subTextControl.value,
      content: this.contentControl.value,
      previewImage: `api/images/image/${this.previewImageControl.value}`,
      fullImage: `api/images/image/${this.fullImageControl.value}`,
      categoriesId: this.categoriesIdControl.value
    }

    console.log("there");
    this.articleService.addArticle(article).subscribe();
  }

}
