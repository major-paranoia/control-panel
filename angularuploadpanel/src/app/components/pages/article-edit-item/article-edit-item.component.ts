import { Component, OnInit, Input } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Category } from 'src/app/models/category';
import { Article } from 'src/app/models/article';
import { ArticlesService } from 'src/app/services/articles.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-article-edit-item',
  templateUrl: './article-edit-item.component.html',
  styleUrls: ['./article-edit-item.component.css']
})
export class ArticleEditItemComponent implements OnInit {

  titleControl = new FormControl('', Validators.required);
  subTextControl = new FormControl('', Validators.required);
  contentControl = new FormControl('', Validators.required);
  previewImageControl = new FormControl('', Validators.required);
  fullImageControl = new FormControl('', Validators.required);
  categoriesIdControl = new FormControl('', Validators.required);
  @Input() categories: Category[]; 
  @Input() article: Article;

  constructor(private articleService: ArticlesService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.titleControl.setValue(this.article.title);
    this.subTextControl.setValue(this.article.subText);
    this.contentControl.setValue(this.article.content);
    this.previewImageControl.setValue(this.article.previewImage.split("/").reverse()[0]);
    this.fullImageControl.setValue(this.article.fullImage.split("/").reverse()[0]);
    this.categoriesIdControl.setValue(this.article.categoriesId);
  }

  onSubmit(){
    this.article.title = this.titleControl.value;
    this.article.subText = this.subTextControl.value;
    this.article.content = this.contentControl.value;
    this.article.previewImage = `api/images/image/${this.previewImageControl.value}`;
    this.article.fullImage = `api/images/image/${this.fullImageControl.value}`;
    this.article.categoriesId = this.categoriesIdControl.value;

    console.log("there");
    this.articleService.updateArticle(this.article).subscribe();
    this.openSnackBar();
  }

  openSnackBar() {
    this._snackBar.open('Статья успешно изменена', 'СТАТЬИ', {
      duration: 3000,
    });
  }

}
