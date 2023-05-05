import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartpharamcyComponent } from './chartpharamcy.component';

describe('ChartpharamcyComponent', () => {
  let component: ChartpharamcyComponent;
  let fixture: ComponentFixture<ChartpharamcyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartpharamcyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartpharamcyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
