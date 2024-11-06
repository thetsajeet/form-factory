/* eslint-disable @typescript-eslint/no-explicit-any */

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
  type: "text" | "email" | "password" | "number";
}

export type FormElementTypes =
  | "text"
  | "email"
  | "password"
  | "select"
  | "number"
  | "textarea";

export interface FormElement {
  id: string | number;
  label: string;
  name: string;
  type: FormElementTypes;
  placeholder?: string;
  options?: string[];
  defaultValue?: string;
}
