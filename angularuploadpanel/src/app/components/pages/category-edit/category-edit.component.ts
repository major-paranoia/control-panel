import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../../services/articles.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { Category } from 'src/app/models/category';
import { Article } from 'src/app/models/article';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {

  categories: Category[];
  isLoading: boolean = true;
  articles: Article[];

  constructor(private articleService:ArticlesService, private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.categoriesService.getCategoriesByCategoryType('category').subscribe(categories => {
      this.categories = categories;
      this.categories = this.categories.filter(c => c.categoryId !== 'home' && c.categoryId !== 'podcasts');
    }, error => this.isLoading = false, () => this.isLoading = false);
  }

  editCategoryParameters(category: Category){
    this.categoriesService.updateCategory(category).subscribe();
    const index = this.categories.findIndex(c => c._id == category._id);
    this.categories[index] = category;
  }

}
