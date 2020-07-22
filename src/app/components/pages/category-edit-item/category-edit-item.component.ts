import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Category } from 'src/app/models/category';
import { ArticlesService } from '../../../services/articles.service';

@Component({
  selector: 'app-category-edit-item',
  templateUrl: './category-edit-item.component.html',
  styleUrls: ['./category-edit-item.component.css']
})
export class CategoryEditItemComponent implements OnInit {
  
  categoriesIdControl = new FormControl('', Validators.required);
  categoryTitleControl = new FormControl('', Validators.required);
  @Input() category: Category; 
  @Output() editCategoryParameters: EventEmitter<Category> = new EventEmitter();

  constructor(private articleService: ArticlesService) { }

  ngOnInit(): void {
    this.categoryTitleControl.setValue(this.category.title);
    this.categoriesIdControl.setValue(this.category.categoryId);
  }
  
  onSubmit(){
    this.articleService.getArticleByCategoriesId(this.category.categoryId).subscribe(articles =>{
      articles.forEach(article => {
        article.categoriesId = this.categoriesIdControl.value;
        this.articleService.updateArticle(article).subscribe();
      });
      this.category.title = this.categoryTitleControl.value;
      this.category.categoryId = this.categoriesIdControl.value;
      this.editCategoryParameters.emit(this.category);
    });
  }

}
