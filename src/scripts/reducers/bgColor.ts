import { Reducer } from 'react';

import { initialState, RootState } from '../Store';

export type BgColorState = Pick<RootState, 'bgColor'>;

export type BgColorAction = {
  type: 'change/bgColor' | 'reset/bgColor';
  payload: BgColorState;
};

export const bgColor: Reducer<BgColorState, BgColorAction> = (
  state: BgColorState,
  action: BgColorAction
): BgColorState => {
  switch (action.type) {
    case 'change/bgColor': {
      return {
        ...state,
        bgColor: action.payload.bgColor
      };
    }
    case 'reset/bgColor': {
      return {
        ...state,
        bgColor: initialState.bgColor
      };
    }
    default: {
      return state;
    }
  }
};
