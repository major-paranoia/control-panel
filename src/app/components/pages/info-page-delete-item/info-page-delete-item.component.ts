import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from 'src/app/models/article';

@Component({
  selector: 'app-info-page-delete-item',
  templateUrl: './info-page-delete-item.component.html',
  styleUrls: ['./info-page-delete-item.component.css']
})
export class InfoPageDeleteItemComponent implements OnInit {

  @Input() article: Article;
  @Output() deleteArticle: EventEmitter<Article> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(){
    this.deleteArticle.emit(this.article);
  }

}
