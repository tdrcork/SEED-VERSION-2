import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreHeaderComponent } from './pre-header.component';

describe('PreHeaderComponent', () => {
  let component: PreHeaderComponent;
  let fixture: ComponentFixture<PreHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
