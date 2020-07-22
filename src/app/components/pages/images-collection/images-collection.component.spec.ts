import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesCollectionComponent } from './images-collection.component';

describe('ImagesCollectionComponent', () => {
  let component: ImagesCollectionComponent;
  let fixture: ComponentFixture<ImagesCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagesCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
