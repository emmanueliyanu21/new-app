import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarkComponent } from './components/bookmark/bookmark.component';
import { ArticleComponent } from './components/article/article.component';
import { NewsComponent } from './components/news/news.component';

const routes: Routes = [
  { path: '', component: NewsComponent },
  { path: 'bookmarks', component: BookmarkComponent },
  { path: 'article/:title', component: ArticleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
