import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EranComponent } from './eran.component';

describe('EranComponent', () => {
  let component: EranComponent;
  let fixture: ComponentFixture<EranComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EranComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
