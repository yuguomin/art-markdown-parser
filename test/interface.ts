export interface AjaxResult<T> {
  code: boolean[];
  message: string;
  data: T;
}