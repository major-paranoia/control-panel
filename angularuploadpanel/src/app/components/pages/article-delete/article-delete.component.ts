import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { CategoriesService } from 'src/app/services/categories.service';
import { ArticlesService } from 'src/app/services/articles.service';
import { TrashService } from 'src/app/services/trash.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-article-delete',
  templateUrl: './article-delete.component.html',
  styleUrls: ['./article-delete.component.css']
})
export class ArticleDeleteComponent implements OnInit {

  articles: Article[];
  isLoading: boolean = true;

  constructor(private categoriesService: CategoriesService, private articleService: ArticlesService, private trashService: TrashService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.articles = new Array();
    this.categoriesService.getCategoriesByCategoryType('category').subscribe(categories => {
      categories = categories.filter(c => c.categoryId !== 'home' && c.categoryId !== 'podcasts');
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
      subText: article.subText,
      content: article.content,
      previewImage:article.previewImage,
      fullImage: article.fullImage,
      categoriesId: article.categoriesId,
      articleType: 'category',
      oldId: article._id
    }

    this.trashService.addTrash(trashArticle).subscribe();

    this.articleService.deleteArticleById(article._id).subscribe();
    this.openSnackBar();
  }

  openSnackBar() {
    this._snackBar.open('Статья успешно удалена', 'СТАТЬИ', {
      duration: 3000,
    });
  }

}
