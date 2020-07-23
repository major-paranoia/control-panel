import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { CategoriesService } from 'src/app/services/categories.service';
import { ArticlesService } from 'src/app/services/articles.service';
import { TrashService } from 'src/app/services/trash.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-podcast-delete',
  templateUrl: './podcast-delete.component.html',
  styleUrls: ['./podcast-delete.component.css']
})
export class PodcastDeleteComponent implements OnInit {

  articles: Article[];
  isLoading: boolean = true;

  constructor(private articleService: ArticlesService, private trashService: TrashService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.articles = new Array();
    this.articleService.getArticleByCategoriesId('podcasts').subscribe(articles => {
      this.articles = articles;
    }, error => this.isLoading = false, () => this.isLoading = false);
  }

  deleteArticle(article: Article){
    this.articles = this.articles.filter(a => a._id != article._id);

    
    const trashArticle = {
      title: article.title,
      subText: article.subText,
      content: article.content,
      oldId: article._id
    }

    this.trashService.addTrash(trashArticle).subscribe();

    this.articleService.deleteArticleById(article._id).subscribe();
    this.openSnackBar();
  }

  openSnackBar() {
    this._snackBar.open('Подкаст успешно удалён', 'Подкасты', {
      duration: 3000,
    });
  }

}
