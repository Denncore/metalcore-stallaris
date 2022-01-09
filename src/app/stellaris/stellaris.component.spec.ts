import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StellarisComponent } from './stellaris.component';

describe('StellarisComponent', () => {
  let component: StellarisComponent;
  let fixture: ComponentFixture<StellarisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StellarisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StellarisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
