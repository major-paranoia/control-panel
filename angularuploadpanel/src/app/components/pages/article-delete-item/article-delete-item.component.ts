import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from 'src/app/models/article';

@Component({
  selector: 'app-article-delete-item',
  templateUrl: './article-delete-item.component.html',
  styleUrls: ['./article-delete-item.component.css']
})
export class ArticleDeleteItemComponent implements OnInit {

  @Input() article: Article;
  @Output() deleteArticle: EventEmitter<Article> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(){
    this.deleteArticle.emit(this.article);
  }

}
