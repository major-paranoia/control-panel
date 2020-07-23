import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/models/image';
import { ImagesService } from 'src/app/services/images.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-images-collection',
  templateUrl: './images-collection.component.html',
  styleUrls: ['./images-collection.component.css']
})
export class ImagesCollectionComponent implements OnInit {

  images: Image[];
  isLoading: boolean = true;

  constructor(private imagesService: ImagesService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.imagesService.getImages().subscribe(images =>{
      this.images = images;
    }, error => this.isLoading = false, () => this.isLoading = false);
  }

  addNewImage(formdata: FormData){
    this.imagesService.addImage(formdata).subscribe();
    this.openSnackBar("Файлы добавлен", "ИЗОБРАЖЕНИЕ");
  }

  deleteImage(image: Image){
    this.images = this.images.filter(img => img._id != image._id);
    this.imagesService.deleteImage(image._id).subscribe();
    this.openSnackBar("Файл удалён", "ИЗОБРАЖЕНИЕ");
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }

}
