import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetteDetailPage } from './recette-detail.page';

describe('RecetteDetailPage', () => {
  let component: RecetteDetailPage;
  let fixture: ComponentFixture<RecetteDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecetteDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetteDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
