import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryDeleteItemComponent } from './category-delete-item.component';

describe('CategoryDeleteItemComponent', () => {
  let component: CategoryDeleteItemComponent;
  let fixture: ComponentFixture<CategoryDeleteItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryDeleteItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryDeleteItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
