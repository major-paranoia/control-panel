import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/models/image';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-images-collection',
  templateUrl: './images-collection.component.html',
  styleUrls: ['./images-collection.component.css']
})
export class ImagesCollectionComponent implements OnInit {

  images: Image[];
  isLoading: boolean = true;

  constructor(private imagesService: ImagesService) { }

  ngOnInit(): void {
    this.imagesService.getImages().subscribe(images =>{
      this.images = images;
    }, error => this.isLoading = false, () => this.isLoading = false);
  }

  addNewImage(formdata: FormData){
    this.imagesService.addImage(formdata).subscribe();
  }

  deleteImage(image: Image){
    console.log("there")
    this.imagesService.deleteImage(image._id);
  }

}
