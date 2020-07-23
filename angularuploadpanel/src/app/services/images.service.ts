import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Image } from '../models/image';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  imagesUrl:string = "/api/images";
  constructor(private http:HttpClient) { }

  getImages(): Observable<Image[]> {
    const requestUrl = `${this.imagesUrl}/files`;
    return this.http.get<Image[]>(requestUrl);
  }

  addImage(formData: FormData): Observable<Image> {
    const requestUrl = `${this.imagesUrl}/upload`;
    return this.http.post<Image>(requestUrl, formData);
  }

  deleteImage(id): Observable<Image> {
    const requestUrl = `${this.imagesUrl}/files/del/${id}`;
    console.log(id);
    return this.http.delete<Image>(requestUrl, httpOptions);
  }
}
