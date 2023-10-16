import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from 'src/app/models/IArticle';
import { NewsService } from 'src/app/service/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})


export class NewsComponent {
  isLoading: boolean = true;
  public articles: Article[] = []
  API_KEY = '81f11c094bbd48c4ae0796313e3bb0c2';
  public newsChannel: string =''
  constructor(private http: HttpClient, private newsService: NewsService) {}

  ngOnInit() {
    this.getAPICall();
  }

  getAPICall() {
    this.isLoading = true;
    this.newsService.getAPICall(this.newsChannel).subscribe((response: any) => {
      this.isLoading = false;
      this.articles = response.articles;
      localStorage.setItem('articles', JSON.stringify(this.articles));
    });
  }

  getFilterItem(selectedChannel: string) {
    this.newsChannel = selectedChannel;
    this.getAPICall();
  }
}
