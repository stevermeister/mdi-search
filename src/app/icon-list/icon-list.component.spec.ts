/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IconListComponent } from './icon-list.component';

describe('IconListComponent', () => {
  let component: IconListComponent;
  let fixture: ComponentFixture<IconListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
