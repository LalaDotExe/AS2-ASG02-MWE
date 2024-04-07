import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JoinFormPage } from './join-form.page';

describe('JoinFormPage', () => {
  let component: JoinFormPage;
  let fixture: ComponentFixture<JoinFormPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
