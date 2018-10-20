import {Reducer, ReducersMapObject, ActionCreator, AnyAction} from 'redux';

export const makeActionCreator = (type: string, ...argNames: string[]): ActionCreator<AnyAction> => {
  return (...args) => {
    const action: AnyAction = {type};
    argNames.forEach((_, index) => {
      action[argNames[index]] = args[index];
    });
    return action;
  };
};

export const createReducer = <S>(initialState: S, handlers: ReducersMapObject): Reducer<S> =>
  (state: S = initialState, action: AnyAction) =>
    handlers.hasOwnProperty(action.type)
      ? handlers[action.type](state, action)
      : state;
