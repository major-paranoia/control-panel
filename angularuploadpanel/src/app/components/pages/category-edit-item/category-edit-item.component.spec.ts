import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryEditItemComponent } from './category-edit-item.component';

describe('CategoryEditItemComponent', () => {
  let component: CategoryEditItemComponent;
  let fixture: ComponentFixture<CategoryEditItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryEditItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryEditItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
