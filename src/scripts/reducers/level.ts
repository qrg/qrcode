import { initialState, RootState } from '../Store';

type LevelState = Pick<RootState, 'level'>;

export type LevelAction = {
  type: 'change/level' | 'reset/level';
  payload: LevelState;
};

export const level = (state: LevelState, action: LevelAction): LevelState => {
  switch (action.type) {
    case 'change/level': {
      return {
        ...state,
        level: action.payload.level
      };
    }
    case 'reset/level': {
      return {
        ...state,
        level: initialState.level
      };
    }
    default: {
      return state;
    }
  }
};
