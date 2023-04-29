import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacydisplayComponent } from './pharmacydisplay.component';

describe('PharmacydisplayComponent', () => {
  let component: PharmacydisplayComponent;
  let fixture: ComponentFixture<PharmacydisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmacydisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PharmacydisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
