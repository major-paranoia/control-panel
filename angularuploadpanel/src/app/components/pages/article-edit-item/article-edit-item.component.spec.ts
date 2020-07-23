import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleEditItemComponent } from './article-edit-item.component';

describe('ArticleEditItemComponent', () => {
  let component: ArticleEditItemComponent;
  let fixture: ComponentFixture<ArticleEditItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleEditItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleEditItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
