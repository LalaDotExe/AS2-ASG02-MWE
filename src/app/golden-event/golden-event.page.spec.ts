import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GoldenEventPage } from './golden-event.page';

describe('GoldenEventPage', () => {
  let component: GoldenEventPage;
  let fixture: ComponentFixture<GoldenEventPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GoldenEventPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
