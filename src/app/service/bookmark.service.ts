import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Article } from '../models/IArticle';

@Injectable({
  providedIn: 'root',
})
export class BookmarkService {
  private bookmarkedArticles: Article[] = [];
  private bookmarkedArticlesSubject = new BehaviorSubject<Article[]>([]);

  constructor() {
    const storedBookmarks = localStorage.getItem('bookmarkedArticles');
    if (storedBookmarks) {
      this.bookmarkedArticles = JSON.parse(storedBookmarks);
      this.updateBookmarkedArticles();
    }
  }

  getBookmarkedArticles(): Observable<Article[]> {
    return this.bookmarkedArticlesSubject.asObservable();
  }

  isBookmarked(article: Article) {
    return this.bookmarkedArticles.some((a) => a.title === article.title);
  }

  toggleBookmark(article: Article) {
    if (this.isBookmarked(article)) {
      this.removeBookmark(article);
    } else {
      this.addBookmark(article);
    }
  }

  addBookmark(article: Article) {
    this.bookmarkedArticles.push(article);
    this.updateBookmarkedArticles();
  }

  removeBookmark(article: Article) {
    this.bookmarkedArticles = this.bookmarkedArticles.filter((a) => a.title !== article.title);
    this.updateBookmarkedArticles();
  }

  private updateBookmarkedArticles() {
    this.bookmarkedArticlesSubject.next(this.bookmarkedArticles);
    localStorage.setItem('bookmarkedArticles', JSON.stringify(this.bookmarkedArticles));
  }

  getBookmarkedArticlesList(): Article[] {
    return this.bookmarkedArticles;
  }

}
