export interface IForm {
    form_elements: FormElement[]
  }
  
  export interface FormElement {
    col_type: string
    elements: Element[]
  }
  
  export interface Element {
    type: string
    label: string
    required: boolean
    element_id: string
  }