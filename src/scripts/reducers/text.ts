import { Reducer } from 'react';

import { initialState, RootState } from '../Store';

type TextState = Pick<RootState, 'text'>;

export type TextAction = {
  type: 'change/text' | 'reset/text';
  payload: TextState;
};

export const text: Reducer<TextState, TextAction> = (
  state: TextState,
  action: TextAction
): TextState => {
  switch (action.type) {
    case 'change/text': {
      return {
        ...state,
        text: action.payload.text
      };
    }
    case 'reset/text': {
      return {
        ...state,
        text: initialState.text
      };
    }
    default: {
      return state;
    }
  }
};
