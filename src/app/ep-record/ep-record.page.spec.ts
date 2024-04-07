import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EpRecordPage } from './ep-record.page';

describe('EpRecordPage', () => {
  let component: EpRecordPage;
  let fixture: ComponentFixture<EpRecordPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EpRecordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
