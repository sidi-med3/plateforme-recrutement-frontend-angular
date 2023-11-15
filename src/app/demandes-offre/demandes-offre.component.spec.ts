import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandesOffreComponent } from './demandes-offre.component';

describe('DemandesOffreComponent', () => {
  let component: DemandesOffreComponent;
  let fixture: ComponentFixture<DemandesOffreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemandesOffreComponent]
    });
    fixture = TestBed.createComponent(DemandesOffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
