import { Component, OnInit, Input } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Category } from 'src/app/models/category';
import { Article } from 'src/app/models/article';
import { ArticlesService } from 'src/app/services/articles.service';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-info-page-edit-item',
  templateUrl: './info-page-edit-item.component.html',
  styleUrls: ['./info-page-edit-item.component.css']
})
export class InfoPageEditItemComponent implements OnInit {

  titleControl = new FormControl('', Validators.required);
  contentControl = new FormControl('', Validators.required);
  fullImageControl = new FormControl('', Validators.required);
  categoriesIdControl = new FormControl('', Validators.required);
  categoryTitleControl = new FormControl('', Validators.required);
  category: Category;
  @Input() categories: Category[]; 
  @Input() article: Article;

  constructor(private articleService:ArticlesService, private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.categories.forEach(category => {
      if(category.categoryId === this.article.categoriesId){
        this.category = category;
        this.categoryTitleControl.setValue(this.category.title);
      }
    });
    this.titleControl.setValue(this.article.title);
    this.contentControl.setValue(this.article.content);
    this.fullImageControl.setValue(this.article.fullImage.split("/").reverse()[0]);
    this.categoryTitleControl.setValue(this.category.title);
    this.categoriesIdControl.setValue(this.article.categoriesId);
  }

  onSubmit(){
    this.category.title = this.categoryTitleControl.value;
    this.category.categoryId = this.categoriesIdControl.value;

    this.categoriesService.updateCategory(this.category).subscribe();

    this.article.title = this.titleControl.value;
    this.article.content = this.contentControl.value;
    this.article.fullImage = `api/images/image/${this.fullImageControl.value}`;
    this.article.categoriesId = this.categoriesIdControl.value;

    console.log("there");
    this.articleService.updateInfoPage(this.article).subscribe();
  }

}
