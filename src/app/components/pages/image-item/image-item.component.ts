import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Image } from 'src/app/models/image';

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

  constructor() { }

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

}
