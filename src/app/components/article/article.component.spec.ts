import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleComponent } from './article.component';
import { ArticleService } from 'src/app/service/article.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('ArticleComponent', () => {
  let component: ArticleComponent;
  let fixture: ComponentFixture<ArticleComponent>;
  let articleService: jasmine.SpyObj<ArticleService>;

  const mockRoute = {
    params: of({ title: 'sample-article-title' })
  };

  beforeEach(() => {
    articleService = jasmine.createSpyObj('ArticleService', ['getArticle']);

    TestBed.configureTestingModule({
      declarations: [ArticleComponent],
      providers: [
        { provide: ArticleService, useValue: articleService },
        { provide: ActivatedRoute, useValue: mockRoute }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ArticleComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch the single article', () => {
    const mockArticle = { title: 'Sample Article', description: 'Sample Description', /* Add other properties */ };
    // articleService.getArticle.and.returnValue(of(mockArticle));

    component.singleArticle();
    fixture.detectChanges();

    expect(articleService.getArticle).toHaveBeenCalledWith('sample-article-title');
    expect(component.data).toEqual(mockArticle);
  });
});
