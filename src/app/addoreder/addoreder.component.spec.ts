import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddorederComponent } from './addoreder.component';

describe('AddorederComponent', () => {
  let component: AddorederComponent;
  let fixture: ComponentFixture<AddorederComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddorederComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddorederComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
