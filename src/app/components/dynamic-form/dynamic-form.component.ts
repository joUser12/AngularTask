import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { forms } from '../../contstants/form.constants'

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss'
})
export class DynamicFormComponent implements OnInit {
  @Input() formElements: any;
  @Input() isEditFormValue: any
  dynamicFormGroup!: FormGroup;
  dynamicForm!: FormGroup;
  formSubmitted = false;
  constructor(private fb: FormBuilder) {
    this.dynamicForm = this.fb.group({});
  }
  ngOnInit(): void {
    this.createForm();
  }





  createForm() {
    const formGroup: any = {};
    this.formElements.forEach((section: any) => {
      section.elements.forEach((element: any) => {
        formGroup[element.label] = new FormControl(
          '', 
          element.required ? Validators.required : null
        );
      });
    });
    this.dynamicForm = this.fb.group(formGroup);
  }

  getControl(elementId: string) {
    return this.dynamicForm.get(elementId);
  }
  onSubmit() {
    this.formSubmitted = true
  }

  onRemoveElement(formValue: any) {
    this.formElements = this.formElements.map((formControlElement: any) => {
      return {
        ...formControlElement,
        elements: formControlElement.elements.filter((element: any) => element.element_id !== formValue.element_id)
      };
    });
  }

}

