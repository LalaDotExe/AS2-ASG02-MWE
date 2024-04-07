import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EsportEventPage } from './esport-event.page';

describe('EsportEventPage', () => {
  let component: EsportEventPage;
  let fixture: ComponentFixture<EsportEventPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EsportEventPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
