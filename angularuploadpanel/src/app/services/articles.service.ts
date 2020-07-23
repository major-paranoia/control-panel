import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Article } from '../models/article';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  articlesUrl:string = "/api/articles";

  constructor(private http: HttpClient) { }

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.articlesUrl);
  }

  getArticleById(id: string): Observable<Article> {
    const requestUrl = `${this.articlesUrl}/article/${id}`;
    return this.http.get<Article>(requestUrl);
  }

  getArticleByCategoriesId(categoriesId: string): Observable<Article[]> {
    const requestUrl = `${this.articlesUrl}/${categoriesId}`;
    return this.http.get<Article[]>(requestUrl);
  }

  addArticle(article): Observable<Article> {
    return this.http.post<Article>(this.articlesUrl, article, httpOptions);
  }

  addInfoPage(article): Observable<Article> {
    const requestUrl = `${this.articlesUrl}/infoPage`;
    return this.http.post<Article>(requestUrl, article, httpOptions);
  }

  addPodcast(article):Observable<Article> {
    const requestUrl = `${this.articlesUrl}/podcasts`;
    return this.http.post<Article>(requestUrl, article, httpOptions);
  }

  updateArticle(article: Article):Observable<Article> {
    const requestUrl = `${this.articlesUrl}/${article._id}`;
    return this.http.patch<Article>(requestUrl, article, httpOptions);
  }

  updateInfoPage(article: Article): Observable<Article> {
    const requestUrl = `${this.articlesUrl}/infoPage/${article._id}`;
    return this.http.patch<Article>(requestUrl, article, httpOptions);
  }

  updatePodcast(article: Article): Observable<Article> {
    const requestUrl = `${this.articlesUrl}/podcasts/${article._id}`;
    return this.http.patch<Article>(requestUrl, article, httpOptions);
  }

  deleteArticleById(id: string): Observable<Article> {
    const requestUrl = `${this.articlesUrl}/${id}`;
    return this.http.delete<Article>(requestUrl, httpOptions);
  }

  deleteArticlesByCategoriesId(categoriesId: string): Observable<Article[]> {
    const requestUrl = `${this.articlesUrl}/${categoriesId}`;
    return this.http.delete<Article[]>(requestUrl, httpOptions);
  }

  recoverArticle(article): Observable<Article> {
    const requestUrl = `${this.articlesUrl}/article/recover`;
    return this.http.post<Article>(requestUrl, article, httpOptions);
  }

  recoverInfoPage(article): Observable<Article> {
    const requestUrl = `${this.articlesUrl}/infoPage/recover`;
    return this.http.post<Article>(requestUrl, article, httpOptions);
  }

  recoverPodcast(article):Observable<Article> {
    const requestUrl = `${this.articlesUrl}/podcast/recover`;
    return this.http.post<Article>(requestUrl, article, httpOptions);
  }
}
