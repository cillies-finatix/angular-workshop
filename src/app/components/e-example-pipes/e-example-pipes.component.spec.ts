import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EExamplePipesComponent } from './e-example-pipes.component';

describe('EExamplePipesComponent', () => {
  let component: EExamplePipesComponent;
  let fixture: ComponentFixture<EExamplePipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EExamplePipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EExamplePipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
