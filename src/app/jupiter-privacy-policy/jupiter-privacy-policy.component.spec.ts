import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JupiterPrivacyPolicyComponent } from './jupiter-privacy-policy.component';

describe('JupiterPrivacyPolicyComponent', () => {
  let component: JupiterPrivacyPolicyComponent;
  let fixture: ComponentFixture<JupiterPrivacyPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JupiterPrivacyPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JupiterPrivacyPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
