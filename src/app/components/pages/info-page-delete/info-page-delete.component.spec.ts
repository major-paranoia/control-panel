import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPageDeleteComponent } from './info-page-delete.component';

describe('InfoPageDeleteComponent', () => {
  let component: InfoPageDeleteComponent;
  let fixture: ComponentFixture<InfoPageDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoPageDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoPageDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
