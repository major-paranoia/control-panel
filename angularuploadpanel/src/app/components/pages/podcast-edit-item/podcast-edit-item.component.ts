import { Component, OnInit, Input } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Article } from 'src/app/models/article';
import { ArticlesService } from 'src/app/services/articles.service';
import { CategoriesService } from 'src/app/services/categories.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-podcast-edit-item',
  templateUrl: './podcast-edit-item.component.html',
  styleUrls: ['./podcast-edit-item.component.css']
})
export class PodcastEditItemComponent implements OnInit {

  titleControl = new FormControl('', Validators.required);
  subTextControl = new FormControl('', Validators.required);
  contentControl = new FormControl('', Validators.required);
  @Input() article: Article;

  constructor(private articleService:ArticlesService, private categoriesService: CategoriesService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.titleControl.setValue(this.article.title);
    this.subTextControl.setValue(this.article.subText);
    this.contentControl.setValue(this.article.content);
  }

  onSubmit(){

    this.article.title = this.titleControl.value;
    this.article.subText = this.subTextControl.value;
    this.article.content = this.contentControl.value;

    console.log("there");
    this.articleService.updatePodcast(this.article).subscribe();
    this.openSnackBar();
  }

  openSnackBar() {
    this._snackBar.open('Подкаст успешно изменен', 'ПОДКАСТЫ', {
      duration: 3000,
    });
  }

}
