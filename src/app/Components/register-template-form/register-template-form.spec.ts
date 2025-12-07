import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterTemplateForm } from './register-template-form';

describe('RegisterTemplateForm', () => {
  let component: RegisterTemplateForm;
  let fixture: ComponentFixture<RegisterTemplateForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterTemplateForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterTemplateForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
