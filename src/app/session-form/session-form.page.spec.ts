import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SessionFormPage } from './session-form.page';

describe('SessionFormPage', () => {
  let component: SessionFormPage;
  let fixture: ComponentFixture<SessionFormPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
