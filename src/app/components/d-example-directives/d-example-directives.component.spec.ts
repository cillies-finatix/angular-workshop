import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DExampleDirectivesComponent } from './d-example-directives.component';

describe('DExampleDirectivesComponent', () => {
  let component: DExampleDirectivesComponent;
  let fixture: ComponentFixture<DExampleDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DExampleDirectivesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DExampleDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
