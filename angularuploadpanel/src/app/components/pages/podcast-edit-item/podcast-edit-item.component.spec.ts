import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PodcastEditItemComponent } from './podcast-edit-item.component';

describe('PodcastEditItemComponent', () => {
  let component: PodcastEditItemComponent;
  let fixture: ComponentFixture<PodcastEditItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodcastEditItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodcastEditItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
