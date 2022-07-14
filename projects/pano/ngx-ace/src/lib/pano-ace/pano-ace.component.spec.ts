import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanoAceComponent } from './pano-ace.component';

describe('PanoAceComponent', () => {
  let component: PanoAceComponent;
  let fixture: ComponentFixture<PanoAceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanoAceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanoAceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
