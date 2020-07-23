import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../../services/articles.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { Category } from 'src/app/models/category';
import { Article } from 'src/app/models/article';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.css']
})
export class ArticleEditComponent implements OnInit {

  categories: Category[];
  articles: Article[];
  isLoading: boolean = true;

  constructor(private articleService:ArticlesService, private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.articles = new Array();
    this.categoriesService.getCategoriesByCategoryType('category').subscribe(categories => {
      this.categories = categories;
      this.categories = this.categories.filter(c => c.categoryId !== 'home' && c.categoryId !== 'podcasts');
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
