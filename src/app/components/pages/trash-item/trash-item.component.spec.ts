import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrashItemComponent } from './trash-item.component';

describe('TrashItemComponent', () => {
  let component: TrashItemComponent;
  let fixture: ComponentFixture<TrashItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrashItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrashItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
