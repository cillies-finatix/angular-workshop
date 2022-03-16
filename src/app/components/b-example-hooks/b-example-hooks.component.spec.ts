import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BExampleHooksComponent } from './b-example-hooks.component';

describe('BExampleHooksComponent', () => {
  let component: BExampleHooksComponent;
  let fixture: ComponentFixture<BExampleHooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BExampleHooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BExampleHooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
