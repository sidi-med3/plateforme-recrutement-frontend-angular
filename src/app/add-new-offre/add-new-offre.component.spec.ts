import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewOffreComponent } from './add-new-offre.component';

describe('AddNewOffreComponent', () => {
  let component: AddNewOffreComponent;
  let fixture: ComponentFixture<AddNewOffreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewOffreComponent]
    });
    fixture = TestBed.createComponent(AddNewOffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
