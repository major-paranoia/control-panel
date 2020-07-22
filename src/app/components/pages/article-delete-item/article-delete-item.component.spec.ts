import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleDeleteItemComponent } from './article-delete-item.component';

describe('ArticleDeleteItemComponent', () => {
  let component: ArticleDeleteItemComponent;
  let fixture: ComponentFixture<ArticleDeleteItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleDeleteItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleDeleteItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
