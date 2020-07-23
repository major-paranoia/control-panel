import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { ArticlesService } from '../../../services/articles.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-podcast-upload',
  templateUrl: './podcast-upload.component.html',
  styleUrls: ['./podcast-upload.component.css']
})
export class PodcastUploadComponent implements OnInit {

  titleControl = new FormControl('', Validators.required);
  subTextControl = new FormControl('', Validators.required);
  contentControl = new FormControl('', Validators.required);

  constructor(private articleService:ArticlesService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  onSubmit(){
    const article = {
      title: this.titleControl.value,
      subText: this.subTextControl.value,
      content: this.contentControl.value
    }

    this.articleService.addPodcast(article).subscribe();
    this.openSnackBar();
  }

  openSnackBar() {
    this._snackBar.open('Подкаст успешно загружен', 'ПОДКАСТЫ', {
      duration: 3000,
    });
  }

}
