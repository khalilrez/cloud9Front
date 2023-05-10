import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatepharmacyadminComponent } from './updatepharmacyadmin.component';

describe('UpdatepharmacyadminComponent', () => {
  let component: UpdatepharmacyadminComponent;
  let fixture: ComponentFixture<UpdatepharmacyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatepharmacyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatepharmacyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
