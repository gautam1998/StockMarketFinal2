import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalCompComponent } from './total-comp.component';

describe('TotalCompComponent', () => {
  let component: TotalCompComponent;
  let fixture: ComponentFixture<TotalCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
