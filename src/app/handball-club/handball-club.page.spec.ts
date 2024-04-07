import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HandballClubPage } from './handball-club.page';

describe('HandballClubPage', () => {
  let component: HandballClubPage;
  let fixture: ComponentFixture<HandballClubPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HandballClubPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
