import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpTestingController } from '@angular/common/http/testing';
import { HttpModule } from '@angular/http';
import {CommentService} from './comment.service'
import { ArticleComponent } from './article.component';

describe('ArticleComponent', () => {
  let component: ArticleComponent;
  let fixture: ComponentFixture<ArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports:[HttpModule, HttpClientTestingModule, FormsModule, RouterTestingModule],
        declarations: [ ArticleComponent ],
        providers:[ CommentService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create article Service', () => {
    fixture = TestBed.createComponent(ArticleComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
  it('should render articles', () => {
    fixture = TestBed.createComponent(ArticleComponent);
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement
      expect(compiled.querySelector('.post').children.length).toEqual(10)
    })
  })
  it('should dispatch actions to create new article', inject([NewArticleService], (service: NewArticleService) => {
    const newArticle = {author: 'yg', content: 'new article for test'};
    fixture = TestBed.createComponent(ArticleComponent);
    component = fixture.componentInstance;
    service.addNewArticle(newArticle.author, component.article, newArticle.content);
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('.card').children.length).toEqual(1)
    })
    
  }))
});