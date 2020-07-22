import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from 'src/app/models/article';


@Component({
  selector: 'app-podcast-delete-item',
  templateUrl: './podcast-delete-item.component.html',
  styleUrls: ['./podcast-delete-item.component.css']
})
export class PodcastDeleteItemComponent implements OnInit {

  @Input() article: Article;
  @Output() deleteArticle: EventEmitter<Article> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(){
    this.deleteArticle.emit(this.article);
  }

}
