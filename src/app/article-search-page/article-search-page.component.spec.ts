import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleSearchPageComponent } from './article-search-page.component';

describe('ArticleSearchPageComponent', () => {
  let component: ArticleSearchPageComponent;
  let fixture: ComponentFixture<ArticleSearchPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleSearchPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleSearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
