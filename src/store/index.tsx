import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { getIntialState, persistState } from '../utils/persist-state';
import { applyMiddleware } from './middleware';
import { ProviderValueInterface } from './ProviderValueInterface';
import reducer from './reducers';
import { rootState, RootState } from './rootState';

const STORAGE_KEY = 'appState';

const initialState: RootState = getIntialState(STORAGE_KEY) ?? rootState;

const providerValue: ProviderValueInterface = {
  state: initialState,
  dispatch: action => {}, // << This will be overwritten
};

export const Context = createContext(providerValue);

const combinedReducers = (state = initialState, action = {}) =>
  Object.assign(
    {},
    ...Object.keys(reducer).map(k => ({ [k]: reducer[k](state[k], action) })),
  );

export default function Provider({ children }) {
  const [state, dispatch] = useReducer(
    combinedReducers,
    combinedReducers(initialState),
  );

  useEffect(() => persistState(STORAGE_KEY, state), [state]);

  return (
    <Context.Provider value={{ state, dispatch }}>
      {children}
    </Context.Provider>
  );
}

export const useStore = () => useContext(Context);
