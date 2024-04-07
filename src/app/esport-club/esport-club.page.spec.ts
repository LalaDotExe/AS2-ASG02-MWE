import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EsportClubPage } from './esport-club.page';

describe('EsportClubPage', () => {
  let component: EsportClubPage;
  let fixture: ComponentFixture<EsportClubPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EsportClubPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
