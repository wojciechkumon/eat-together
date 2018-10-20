
export interface Action {
  type: string;
}

export interface DataAction<T> extends Action {
  data: T;
}

export interface ErrorAction<T> extends Action {
  error: any;
}
