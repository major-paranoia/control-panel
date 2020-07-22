import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-images-upload',
  templateUrl: './images-upload.component.html',
  styleUrls: ['./images-upload.component.css']
})
export class ImagesUploadComponent {

  @Input() accept = 'image/*';
  @Output() addNewImage: EventEmitter<FormData> = new EventEmitter();

  files: File[] = new Array();

  constructor() {}

  onFileSelected(event) {
    const newFile: File = <File>event.target.files[0];
    if(newFile.type === 'image/jpeg' || newFile.type === 'image/png' ||newFile.type === 'image/webp' || newFile.type === 'image/jpg'){
      this.files.push(newFile);
    }
  }

  onUpload() {
    this.files.forEach(file => {
      const formdata = new FormData();
      formdata.append('file', file, file.name);
      this.addNewImage.emit(formdata);
    });
  }

  removeFile(file) {
    let index;
    if (this.files && -1 !== (index = this.files.indexOf(file))) {
      this.files.splice(index, 1);
    }
  }

}
