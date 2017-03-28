export class TdQuestionBase<T>{
  value: T;
  id: number;
  name: string;
  required: boolean;
  sort: number;
  options: Array<string>;
  fieldType: string;
  constructor(options: {
      value?: T,
      id?: number,
      name?: string,
      required?: boolean,
      sort?: number,
      options?: Array<string>,
      fieldType?: string
    } = {}) {
    this.value = options.value;
    this.id = options.id;
    this.name = options.name || '';
    this.required = !!options.required;
    this.sort = options.sort === undefined ? 1 : options.sort;
    this.options = options.options || [];
    this.fieldType = options.fieldType || '';
  }
}
