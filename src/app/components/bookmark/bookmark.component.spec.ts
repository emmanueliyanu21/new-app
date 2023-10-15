import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookmarkComponent } from './bookmark.component';
import { of } from 'rxjs';
import { BookmarkService } from 'src/app/service/bookmark.service';

describe('BookmarkComponent', () => {
  let component: BookmarkComponent;
  let fixture: ComponentFixture<BookmarkComponent>;
  let bookmarkService: jasmine.SpyObj<BookmarkService>;

  beforeEach(() => {
    bookmarkService = jasmine.createSpyObj('BookmarkService', ['getBookmarkedArticles', 'removeBookmark']);

    TestBed.configureTestingModule({
      declarations: [BookmarkComponent],
      providers: [
        { provide: BookmarkService, useValue: bookmarkService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(BookmarkComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch bookmarked articles', () => {
    const mockArticles = [{ title: 'Article 1' }, { title: 'Article 2' }];
    bookmarkService.getBookmarkedArticles.and.returnValue(of(mockArticles));

    component.getBookMarked();
    fixture.detectChanges();

    expect(bookmarkService.getBookmarkedArticles).toHaveBeenCalled();
    expect(component.bookmarkedArticles).toEqual(mockArticles);
  });

  it('should remove a bookmark', () => {
    const mockArticle = { title: 'Article to remove' };
    // bookmarkService.removeBookmark.and.returnValue(of(undefined));

    component.removeBookmark(mockArticle);
    fixture.detectChanges();

    expect(bookmarkService.removeBookmark).toHaveBeenCalledWith(mockArticle);
  });
});
