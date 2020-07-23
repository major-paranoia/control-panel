import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PodcastDeleteComponent } from './podcast-delete.component';

describe('PodcastDeleteComponent', () => {
  let component: PodcastDeleteComponent;
  let fixture: ComponentFixture<PodcastDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodcastDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodcastDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
