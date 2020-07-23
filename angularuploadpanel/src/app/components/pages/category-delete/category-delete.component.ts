import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoriesService } from 'src/app/services/categories.service';
import { ArticlesService } from 'src/app/services/articles.service';
import { TrashService } from 'src/app/services/trash.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-category-delete',
  templateUrl: './category-delete.component.html',
  styleUrls: ['./category-delete.component.css']
})
export class CategoryDeleteComponent implements OnInit {

  categories: Category[];
  isLoading: boolean = true;

  constructor(private categoriesService: CategoriesService, private articleService: ArticlesService, private trashService: TrashService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.categoriesService.getCategoriesByCategoryType('category').subscribe(categories => {
      this.categories = categories;
      this.categories = this.categories.filter(c => c.categoryId !== 'home' && c.categoryId !== 'podcasts');
    }, error => this.isLoading = false, () => this.isLoading = false);
  }

  deleteCategory(category: Category){
    this.categories = this.categories.filter(c => c._id != category._id);

    this.articleService.getArticleByCategoriesId(category.categoryId).subscribe(articles => {
      articles.forEach(article => {
        let trashArticle = {
          title: article.title,
          subText: article.subText,
          content: article.content,
          previewImage: article.previewImage,
          fullImage: article.fullImage,
          categoriesId: article.categoriesId,
          articleType: 'category',
          oldId: article._id
        }

        this.trashService.addTrash(trashArticle).subscribe();
        this.articleService.deleteArticleById(article._id).subscribe();
      });
    });

    this.categoriesService.deleteCategory(category._id).subscribe();
    this.openSnackBar();
  }

  openSnackBar() {
    this._snackBar.open('Раздел успешно удалён', 'РАЗДЕЛЫ', {
      duration: 3000,
    });
  }

}
