import React, { createContext, useReducer, Dispatch } from 'react';

import { rootReducer, Action } from './reducers/rootReducer';
import { TextState } from './containers/InputContainer';
import { QrcodeState } from './containers/QrcodeContainer';

export type RootState = TextState & QrcodeState;

type StoreType = {
  state: RootState;
  dispatch: Dispatch<Action>;
};

export const initialState: RootState = {
  text: '',
  bgColor: '#000000',
  fgColor: '#ffffff',
  level: 'M',
  size: 128,
  includeMargin: true
};

export const Store = createContext<StoreType>({
  state: initialState,
  dispatch: () => {}
});

export const StoreProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
};
