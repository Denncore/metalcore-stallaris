import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetalcoreComponent } from './metalcore.component';

describe('MetalcoreComponent', () => {
  let component: MetalcoreComponent;
  let fixture: ComponentFixture<MetalcoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetalcoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetalcoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
