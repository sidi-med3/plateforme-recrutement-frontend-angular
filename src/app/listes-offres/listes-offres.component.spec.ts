import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListesOffresComponent } from './listes-offres.component';

describe('ListesOffresComponent', () => {
  let component: ListesOffresComponent;
  let fixture: ComponentFixture<ListesOffresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListesOffresComponent]
    });
    fixture = TestBed.createComponent(ListesOffresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
