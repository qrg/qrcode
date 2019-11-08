import { Reducer } from 'react';

import { initialState, RootState } from '../Store';

export type SizeState = Pick<RootState, 'size'>;

export type SizeAction = {
  type: 'change/size' | 'reset/size';
  payload: SizeState;
};

export const size: Reducer<SizeState, SizeAction> = (
  state: SizeState,
  action: SizeAction
): SizeState => {
  switch (action.type) {
    case 'change/size': {
      return {
        ...state,
        size: action.payload.size
      };
    }
    case 'reset/size': {
      return {
        ...state,
        size: initialState.size
      };
    }
    default: {
      return state;
    }
  }
};
