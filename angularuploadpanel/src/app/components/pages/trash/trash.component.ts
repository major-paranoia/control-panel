import { Component, OnInit } from '@angular/core';
import { Trash } from 'src/app/models/trash';
import { TrashService } from 'src/app/services/trash.service';
import { ArticlesService } from 'src/app/services/articles.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.css']
})
export class TrashComponent implements OnInit {

  trashArticles: Trash[];
  isLoading: boolean = true;

  constructor(private trashService: TrashService, private articlesService: ArticlesService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.trashService.getTrash().subscribe(trash => {
      this.trashArticles = trash;
    }, error => this.isLoading = false, () => this.isLoading = false);
  }

  deleteTrash(trash: Trash){
    this.trashArticles = this.trashArticles.filter(t => t._id != trash._id);
    this.trashService.deleteTrash(trash._id).subscribe();
    this.openSnackBar( "Мусор удалён", "КОРЗИНА");
  }

  recoverArticle(trash: Trash){
    this.trashArticles = this.trashArticles.filter(t => t._id != trash._id);
    if(trash.categoriesId == "podcasts"){ 
      const article = {
        title: trash.title,
        subText: trash.subText,
        content: trash.content,
        oldId: trash.oldId
      }
      this.articlesService.recoverPodcast(article).subscribe();
      this.trashService.deleteTrash(trash._id).subscribe();
      this.openSnackBar( "Подкаст восстановлен", "ПОДКАСТЫ");
    }
    else if(trash.articleType == "category"){
      const article = {
        title: trash.title,
        subText: trash.subText,
        content: trash.content,
        previewImage: trash.previewImage,
        fullImage: trash.fullImage,
        categoriesId: trash.categoriesId,
        oldId: trash.oldId
      }
      this.articlesService.recoverArticle(article).subscribe();
      this.trashService.deleteTrash(trash._id).subscribe();
      this.openSnackBar( "Статья восстановлена", "СТАТЬИ");
    }
    else if(trash.articleType == "info"){
      const article = {
        title: trash.title,
        subText: trash.subText,
        content: trash.content,
        previewImage: trash.previewImage,
        fullImage: trash.fullImage,
        categoriesId: trash.categoriesId,
        oldId: trash.oldId
      }
      this.articlesService.recoverInfoPage(article).subscribe();
      this.trashService.deleteTrash(trash._id).subscribe();
      this.openSnackBar( "Страница восстановлена", "ИНФО");
    }
  }

  openSnackBar(message:string, ation:string) {
    this._snackBar.open(message, ation, {
      duration: 3000,
    });
  }

}
