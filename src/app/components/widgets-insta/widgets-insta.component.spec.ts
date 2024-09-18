import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetsInstaComponent } from './widgets-insta.component';

describe('WidgetsInstaComponent', () => {
  let component: WidgetsInstaComponent;
  let fixture: ComponentFixture<WidgetsInstaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetsInstaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetsInstaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
