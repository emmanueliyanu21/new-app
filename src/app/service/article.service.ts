import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Article } from '../models/IArticle';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private articles: Article[] = []
  constructor() { }

  getArticles(): Observable<Article[]> {
    return of(this.articles);
  }

  getArticle(title: string): Article | undefined {
    const cachedDataString = localStorage.getItem('articles');
    this.articles = cachedDataString ? JSON.parse(cachedDataString) : null;
    return this.articles.find(article => article.title === title);
  }

}
