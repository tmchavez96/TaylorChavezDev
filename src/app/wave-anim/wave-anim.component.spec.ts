import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaveAnimComponent } from './wave-anim.component';

describe('WaveAnimComponent', () => {
  let component: WaveAnimComponent;
  let fixture: ComponentFixture<WaveAnimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaveAnimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaveAnimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
