import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPageUploadComponent } from './info-page-upload.component';

describe('InfoPageUploadComponent', () => {
  let component: InfoPageUploadComponent;
  let fixture: ComponentFixture<InfoPageUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoPageUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoPageUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
