import { initialState, RootState } from '../Store';

type IncludeMarginState = Pick<RootState, 'includeMargin'>;

export type IncludeMarginAction = {
  type: 'change/includeMargin' | 'reset/includeMargin';
  payload: IncludeMarginState;
};

export const includeMargin = (
  state: IncludeMarginState,
  action: IncludeMarginAction
): IncludeMarginState => {
  switch (action.type) {
    case 'change/includeMargin': {
      return {
        ...state,
        includeMargin: action.payload.includeMargin
      };
    }
    case 'reset/includeMargin': {
      return {
        ...state,
        includeMargin: initialState.includeMargin
      };
    }
    default: {
      return state;
    }
  }
};
