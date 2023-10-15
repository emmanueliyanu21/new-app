import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/IArticle';
import { ArticleService } from 'src/app/service/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  data: any

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
  ) { }

  ngOnInit(): void {
    this.singleArticle();
  }

  singleArticle() {
    this.route.params.subscribe(params => {
      const articleTitle = params['title'];
      this.data = this.articleService.getArticle(articleTitle)
      console.log(this.data)
    });
  }

}
