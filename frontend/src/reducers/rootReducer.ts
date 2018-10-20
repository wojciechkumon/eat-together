import {FormStateMap, reducer as formReducer} from 'redux-form';
import {Reducer, combineReducers} from 'redux';

export interface ReduxState {
  form: FormStateMap;
}

const rootReducer: Reducer<ReduxState> = combineReducers({
  form: formReducer,
});

export default rootReducer;

export type GetState = () => ReduxState;
