import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GotListViewComponent } from './got-list-view.component';

describe('GotListViewComponent', () => {
  let component: GotListViewComponent;
  let fixture: ComponentFixture<GotListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GotListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GotListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
