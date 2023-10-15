import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from 'src/app/models/IArticle';

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
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getAPICall();
  }

  getAPICall(){
    this.http.get('https://newsapi.org/v2/top-headlines', {
      params: {
        sources: this.newsChannel ? this.newsChannel : 'bbc-news',
        apiKey: this.API_KEY
      }
    }).subscribe((response: any) => {
      this.isLoading = false;
      const { articles } = response;
      this.articles = articles;
      localStorage.setItem('articles', JSON.stringify(this.articles));
    });
  }

  getFilterItem(event:any){
    this.newsChannel = event;
    console.log(event, 'lll')
    this.getAPICall()
  }
}
