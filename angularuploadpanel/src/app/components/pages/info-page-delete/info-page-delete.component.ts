import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { CategoriesService } from 'src/app/services/categories.service';
import { ArticlesService } from 'src/app/services/articles.service';
import { TrashService } from 'src/app/services/trash.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-info-page-delete',
  templateUrl: './info-page-delete.component.html',
  styleUrls: ['./info-page-delete.component.css']
})
export class InfoPageDeleteComponent implements OnInit {

  articles: Article[];
  isLoading: boolean = true;

  constructor(private categoriesService: CategoriesService, private articleService: ArticlesService, private trashService: TrashService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.articles = new Array();
    this.categoriesService.getCategoriesByCategoryType('info').subscribe(categories => {
      categories.forEach(category => {
        this.articleService.getArticleByCategoriesId(category.categoryId).subscribe(articles => {
          articles.forEach(article => {
            this.articles.push(article);
          });
        });
      });
    }, error => this.isLoading = false, () => this.isLoading = false);
  }

  deleteArticle(article: Article){
    this.articles = this.articles.filter(a => a._id != article._id);

    
    const trashArticle = {
      title: article.title,
      subText: 'none',
      content: article.content,
      previewImage: 'none',
      fullImage: article.fullImage,
      categoriesId: article.categoriesId,
      articleType: 'info',
      oldId: article._id
    }

    this.trashService.addTrash(trashArticle).subscribe();

    this.articleService.deleteArticleById(article._id).subscribe();
    this.openSnackBar();
  }

  openSnackBar() {
    this._snackBar.open('Страница успешно удалена', 'ИНФО', {
      duration: 3000,
    });
  }

}
