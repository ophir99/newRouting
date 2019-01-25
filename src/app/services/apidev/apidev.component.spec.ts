import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApidevComponent } from './apidev.component';

describe('ApidevComponent', () => {
  let component: ApidevComponent;
  let fixture: ComponentFixture<ApidevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApidevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApidevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
