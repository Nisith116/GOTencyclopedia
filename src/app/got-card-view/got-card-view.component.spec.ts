import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GotCardViewComponent } from './got-card-view.component';

describe('GotCardViewComponent', () => {
  let component: GotCardViewComponent;
  let fixture: ComponentFixture<GotCardViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GotCardViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GotCardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
