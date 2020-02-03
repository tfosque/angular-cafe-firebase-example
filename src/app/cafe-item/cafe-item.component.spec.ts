import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CafeItemComponent } from './cafe-item.component';

describe('CafeItemComponent', () => {
  let component: CafeItemComponent;
  let fixture: ComponentFixture<CafeItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CafeItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CafeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
