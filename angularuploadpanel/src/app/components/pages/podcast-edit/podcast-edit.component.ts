import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../../services/articles.service';
import { Article } from 'src/app/models/article';

@Component({
  selector: 'app-podcast-edit',
  templateUrl: './podcast-edit.component.html',
  styleUrls: ['./podcast-edit.component.css']
})
export class PodcastEditComponent implements OnInit {

  articles: Article[];
  isLoading: boolean = true;

  constructor(private articleService:ArticlesService) { }

  ngOnInit(): void {
    this.articles = new Array();
    this.articleService.getArticleByCategoriesId('podcasts').subscribe(articles => {
      this.articles = articles;
    }, error => this.isLoading = false, () => this.isLoading = false);
  }

}
