export interface AjaxResult<T> {
  code: number;
  message: string;
  data: T;
}