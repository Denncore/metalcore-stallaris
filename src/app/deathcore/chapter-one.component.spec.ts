import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterOneComponent } from 'src/app/deathcore/chapter-one.component';

describe('DeathcoreComponent', () => {
  let component: ChapterOneComponent;
  let fixture: ComponentFixture<ChapterOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChapterOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
