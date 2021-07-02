import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticalPageComponent } from './political-page.component';

describe('PoliticalPageComponent', () => {
  let component: PoliticalPageComponent;
  let fixture: ComponentFixture<PoliticalPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliticalPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
