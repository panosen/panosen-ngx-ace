import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanosenAceComponent } from './panosen-ace.component';

describe('PanosenAceComponent', () => {
  let component: PanosenAceComponent;
  let fixture: ComponentFixture<PanosenAceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanosenAceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanosenAceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
