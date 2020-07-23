import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Trash } from '../models/trash';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TrashService {

  trashUrl:string = "/api/trash";
  constructor(private http:HttpClient) { }

  getTrash(): Observable<Trash[]> {
    return this.http.get<Trash[]>(this.trashUrl);
  }

  addTrash(trash): Observable<Trash> {
    return this.http.post<Trash>(this.trashUrl, trash, httpOptions);
  }

  addTrashPodcast(trash): Observable<Trash> {
    const requestUrl = `${this.trashUrl}/podcasts`;
    return this.http.post<Trash>(requestUrl, trash, httpOptions);
  }

  deleteTrash(id: string): Observable<Trash> {
    const requestUrl = `${this.trashUrl}/${id}`;
    return this.http.delete<Trash>(requestUrl, httpOptions);
  }
}
