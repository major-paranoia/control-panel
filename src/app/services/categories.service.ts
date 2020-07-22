import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Category } from '../models/category';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  categoriesUrl:string = "/api/categories";
  constructor(private http:HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoriesUrl);
  }

  getCategoriesByCategoryType(categoryType: string): Observable<Category[]> {
    const requestUrl = `${this.categoriesUrl}/${categoryType}`;
    return this.http.get<Category[]>(requestUrl);
  }

  addCategory(category): Observable<Category> {
    return this.http.post<Category>(this.categoriesUrl, category, httpOptions);
  }

  updateCategory(category: Category): Observable<Category> {
    const requestUrl = `${this.categoriesUrl}/${category._id}`;
    return this.http.patch<Category>(requestUrl, category, httpOptions);
  }

  deleteCategory(id: string): Observable<Category> {
    const requestUrl = `${this.categoriesUrl}/${id}`;
    return this.http.delete<Category>(requestUrl, httpOptions);
  }
}
