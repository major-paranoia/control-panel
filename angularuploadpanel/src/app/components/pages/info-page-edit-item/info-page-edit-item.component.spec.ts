import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPageEditItemComponent } from './info-page-edit-item.component';

describe('InfoPageEditItemComponent', () => {
  let component: InfoPageEditItemComponent;
  let fixture: ComponentFixture<InfoPageEditItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoPageEditItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoPageEditItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
