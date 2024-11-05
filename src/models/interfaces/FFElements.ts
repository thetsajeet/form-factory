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
  type: "text" | "email" | "password";
}
