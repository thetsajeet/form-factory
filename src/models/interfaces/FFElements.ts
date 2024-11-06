/* eslint-disable @typescript-eslint/no-explicit-any */

export type FormElementTypes =
  | "text"
  | "email"
  | "password"
  | "select"
  | "number"
  | "textarea";

export interface FieldInterface {
  field: any; //TODO: Choose a field type
  label: string;
  description?: string;
  placeholder?: string;
}

export interface FFSelectInterface extends FieldInterface {
  options: string[];
}

export interface FFInputInterface extends FieldInterface {
  type: FormElementTypes;
}

export interface FFTextareaInterface extends FieldInterface {
  resize?: boolean;
}

export interface FormElement {
  id: string | number;
  label: string;
  name: string;
  type: FormElementTypes;
  placeholder?: string;
  options?: string[];
  defaultValue?: string;
}
