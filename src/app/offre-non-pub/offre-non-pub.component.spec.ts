import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreNonPubComponent } from './offre-non-pub.component';

describe('OffreNonPubComponent', () => {
  let component: OffreNonPubComponent;
  let fixture: ComponentFixture<OffreNonPubComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OffreNonPubComponent]
    });
    fixture = TestBed.createComponent(OffreNonPubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
