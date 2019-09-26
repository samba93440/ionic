import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecettesPage } from './recettes.page';

describe('RecettesPage', () => {
  let component: RecettesPage;
  let fixture: ComponentFixture<RecettesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecettesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecettesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
