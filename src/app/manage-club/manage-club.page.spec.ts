import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManageClubPage } from './manage-club.page';

describe('ManageClubPage', () => {
  let component: ManageClubPage;
  let fixture: ComponentFixture<ManageClubPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageClubPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
