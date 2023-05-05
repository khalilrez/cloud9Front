import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatzorderadminComponent } from './updatzorderadmin.component';

describe('UpdatzorderadminComponent', () => {
  let component: UpdatzorderadminComponent;
  let fixture: ComponentFixture<UpdatzorderadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatzorderadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatzorderadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
