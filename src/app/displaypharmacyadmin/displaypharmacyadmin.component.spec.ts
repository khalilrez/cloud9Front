import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaypharmacyadminComponent } from './displaypharmacyadmin.component';

describe('DisplaypharmacyadminComponent', () => {
  let component: DisplaypharmacyadminComponent;
  let fixture: ComponentFixture<DisplaypharmacyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaypharmacyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplaypharmacyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
