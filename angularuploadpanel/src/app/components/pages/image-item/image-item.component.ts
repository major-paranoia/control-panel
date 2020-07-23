import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Image } from 'src/app/models/image';
import { Clipboard } from '@angular/cdk/clipboard';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-image-item',
  templateUrl: './image-item.component.html',
  styleUrls: ['./image-item.component.css']
})
export class ImageItemComponent implements OnInit {

  @Input() image: Image;
  @Output() deleteImage: EventEmitter<Image> = new EventEmitter();
  imageSource: string;
  expandImage: boolean = false;

  constructor(private clipboard: Clipboard, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.imageSource = `api/images/image/${this.image.filename}`;
  }

  setClasses(){
    let classes = {
      'expandImage': this.expandImage,
      'smallImage': !this.expandImage
    }
    return classes;
  }

  changeImageSize(){
    this.expandImage = !this.expandImage;
  }

  onDelete(){
    this.deleteImage.emit(this.image);
  }

  copyName(){
    this.clipboard.copy(this.image.filename);
    this.openSnackBar("Имя скопировано", "ИЗОБРАЖЕНИЯ");
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }

}
