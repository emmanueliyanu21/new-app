import { Component } from '@angular/core';
import { Article } from 'src/app/models/IArticle';
import { BookmarkService } from 'src/app/service/bookmark.service';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.css']
})
export class BookmarkComponent {
  isLoading: boolean = true;
  bookmarkedArticles: Article[] = [];

  constructor(private bookmarkService: BookmarkService, ) {}

  ngOnInit() {
    this.getBookMarked()
  }

  getBookMarked(){
    this.bookmarkService.getBookmarkedArticles().subscribe((articles) => {
      this.isLoading = false;
      this.bookmarkedArticles = articles;
    });
  }

  removeBookmark(article: Article) {
    this.bookmarkService.removeBookmark(article);
  }

}
