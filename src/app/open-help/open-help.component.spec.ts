import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenHelpComponent } from './open-help.component';

describe('OpenHelpComponent', () => {
  let component: OpenHelpComponent;
  let fixture: ComponentFixture<OpenHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenHelpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
