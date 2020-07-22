import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPageDeleteItemComponent } from './info-page-delete-item.component';

describe('InfoPageDeleteItemComponent', () => {
  let component: InfoPageDeleteItemComponent;
  let fixture: ComponentFixture<InfoPageDeleteItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoPageDeleteItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoPageDeleteItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
