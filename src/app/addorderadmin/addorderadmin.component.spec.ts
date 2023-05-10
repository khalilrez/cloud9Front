import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddorderadminComponent } from './addorderadmin.component';

describe('AddorderadminComponent', () => {
  let component: AddorderadminComponent;
  let fixture: ComponentFixture<AddorderadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddorderadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddorderadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
