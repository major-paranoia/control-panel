import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../../services/articles.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { Category } from 'src/app/models/category';
import { Article } from 'src/app/models/article';

@Component({
  selector: 'app-info-page-edit',
  templateUrl: './info-page-edit.component.html',
  styleUrls: ['./info-page-edit.component.css']
})
export class InfoPageEditComponent implements OnInit {

  categories: Category[];
  articles: Article[];
  isLoading: boolean = true;

  constructor(private articleService:ArticlesService, private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.articles = new Array();
    this.categoriesService.getCategoriesByCategoryType('info').subscribe(categories => {
      this.categories = categories;
      this.categories.forEach(category => {
        this.articleService.getArticleByCategoriesId(category.categoryId).subscribe(articles => {
          articles.forEach(article => {
            this.articles.push(article);
          });
        });
      });
    }, error => this.isLoading = false, () => this.isLoading = false);
  }

}
