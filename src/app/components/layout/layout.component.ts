import { Component, OnInit } from '@angular/core';
import { DynamicFormComponent } from '../dynamic-form/dynamic-form.component';
import { forms } from '../../contstants/form.constants';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [DynamicFormComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit {
  constructor(private json: FormService) { }

  isEditForm: boolean = false
  formElementsValue = forms.form_elements;
  ngOnInit(): void {

  }
  fetForms() {
    return forms.form_elements;
  }

  onEditForm() {
    this.isEditForm = true
  }

  onCloseForm() {

    this.isEditForm = false
  }

}
