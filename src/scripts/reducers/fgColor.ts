import { Reducer } from 'react';

import { initialState, RootState } from '../Store';

export type FgColorState = Pick<RootState, 'fgColor'>;

export type FgColorAction = {
  type: 'change/fgColor' | 'reset/fgColor';
  payload: FgColorState;
};

export const fgColor: Reducer<FgColorState, FgColorAction> = (
  state: FgColorState,
  action: FgColorAction
): FgColorState => {
  switch (action.type) {
    case 'change/fgColor': {
      return {
        ...state,
        fgColor: action.payload.fgColor
      };
    }
    case 'reset/fgColor': {
      return {
        ...state,
        fgColor: initialState.fgColor
      };
    }
    default: {
      return state;
    }
  }
};
