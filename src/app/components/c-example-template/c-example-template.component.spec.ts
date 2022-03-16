import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CExampleTemplateComponent } from './c-example-template.component';

describe('CExampleTemplateComponent', () => {
  let component: CExampleTemplateComponent;
  let fixture: ComponentFixture<CExampleTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CExampleTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CExampleTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
