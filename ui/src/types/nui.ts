export interface ServerResponsePromise<T = undefined> {
  errorMsg: string;
  status: 'ok' | 'error';
  data: T;
}
