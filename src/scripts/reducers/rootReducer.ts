import { Reducer } from 'react';
import { initialState, RootState } from '../Store';

import { text } from './text';
import { level } from './level';
import { bgColor } from './bgColor';
import { fgColor } from './fgColor';
import { size } from './size';
import { includeMargin } from './includeMargin';

export type Action = {
  type: string;
  payload: {
    [k: string]: any;
  };
};

type Reducers = {
  [K in keyof RootState]: Reducer<Pick<RootState, K>, any>;
};

const combineReducers = (reducers: Reducers) => {
  return (state: RootState, action: Action): RootState => {
    const keys = Object.keys(reducers) as (keyof RootState)[];
    return keys.reduce((acc, key) => {
      const reducer = reducers[key];
      if (!reducer) {
        return acc;
      }
      return {
        ...acc,
        ...reducer({ [key]: state[key] } as any, action)
      };
    }, initialState);
  };
};

export const rootReducer = combineReducers({
  text,
  bgColor,
  fgColor,
  level,
  size,
  includeMargin
});
