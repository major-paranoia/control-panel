import { Component, OnInit } from '@angular/core';
import { Trash } from 'src/app/models/trash';
import { TrashService } from 'src/app/services/trash.service';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.css']
})
export class TrashComponent implements OnInit {

  trashArticles: Trash[];
  isLoading: boolean = true;

  constructor(private trashService: TrashService, private articlesService: ArticlesService) { }

  ngOnInit(): void {
    this.trashService.getTrash().subscribe(trash => {
      this.trashArticles = trash;
    }, error => this.isLoading = false, () => this.isLoading = false);
  }

  deleteTrash(trash: Trash){
    this.trashService.deleteTrash(trash._id).subscribe();
  }

  recoverArticle(trash: Trash){
    if(trash.categoriesId == "podcasts"){ 
      const article = {
        title: trash.title,
        subText: trash.subText,
        content: trash.content
      }
      this.articlesService.addPodcast(article).subscribe();
    }
    else if(trash.articleType == "category"){
      const article = {
        title: trash.title,
        subText: trash.subText,
        content: trash.content,
        previewImage: trash.previewImage,
        fullImage: trash.fullImage,
        categoriesId: trash.categoriesId
      }
      this.articlesService.addArticle(article).subscribe();
    }
    else if(trash.articleType == "info"){
      const article = {
        title: trash.title,
        subText: trash.subText,
        content: trash.content,
        previewImage: trash.previewImage,
        fullImage: trash.fullImage,
        categoriesId: trash.categoriesId
      }
      this.articlesService.addInfoPage(article).subscribe();
    }
  }

}
