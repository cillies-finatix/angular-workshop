import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AExampleSimpleComponent } from './a-example-simple.component';

describe('AExampleSimpleComponent', () => {
  let component: AExampleSimpleComponent;
  let fixture: ComponentFixture<AExampleSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AExampleSimpleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AExampleSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
