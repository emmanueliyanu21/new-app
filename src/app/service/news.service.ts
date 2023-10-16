import { Injectable } from '@angular/core';
import { HttpClient,  HttpParams } from '@angular/common/http';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getAPICall(newsChannel: string) {
    const params = new HttpParams()
      .set('sources', newsChannel || 'bbc-news')
      .set('apiKey', environment.apiKey);

    return this.http.get(environment.apiUrl, { params });
  }

}
