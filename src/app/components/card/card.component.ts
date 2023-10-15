import { Component, Input } from '@angular/core';
import { Article } from 'src/app/models/IArticle';
import { BookmarkService } from 'src/app/service/bookmark.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() article: any;

  bookmarked: boolean = false

  articles: Article[] = []; 

  constructor(private bookmarkService: BookmarkService) {}

  toggleBookmark(article: Article) {
    this.bookmarkService.toggleBookmark(article);
  }

  isArticleBookmarked(article: Article): boolean {
    return this.bookmarkService.isBookmarked(article);
  }
}
