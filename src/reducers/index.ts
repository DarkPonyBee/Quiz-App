import { StateType } from "typesafe-actions";

import { ActionType } from "../actions/types";
import { QuestionObject, UserAnswer } from "../types/objects";

const gameState = {
  isGameLoading: false,
  questions: [],
  totalScore: 0,
  currentQuestionIndex: 0,
  currentQuestion: "",
  currentCategory: "",
  userAnswers: [],
  error: null,
};

type Store = {
  isGameLoading: boolean;
  questions: QuestionObject[];
  totalScore: number;
  currentQuestionIndex: number;
  currentQuestion: string;
  currentCategory: string;
  userAnswers: UserAnswer[];
  error: null | string;
};

export type RootState = {
  reducers: Store;
};

type Action = { type: ActionType; payload: any };

const gameReducer = (state = gameState, action: Action) => {
  const newState = {};

  switch (action.type) {
    case ActionType.FETCH_GAME: {
      Object.assign(newState, state, {
        isGameLoading: true,
      });
      return newState;
    }
    case ActionType.FETCH_GAME_SUCCESS: {
      Object.assign(newState, state, {
        isGameLoading: false,
        questions: action.payload.questions,
        currentQuestion: action.payload.currentQuestion,
        currentCategory: action.payload.currentCategory,
      });
      return newState;
    }
    case ActionType.FETCH_GAME_ERROR: {
      Object.assign(newState, state, {
        isGameLoading: false,
        error: action.payload,
      });
      return newState;
    }
    case ActionType.NEXT_QUESTION: {
      const newUserAnswers = [...state.userAnswers, action.payload.userAnswer];

      Object.assign(newState, state, {
        currentQuestionIndex: action.payload.currentQuestionIndex,
        totalScore: action.payload.totalScore,
        currentQuestion: action.payload.currentQuestion,
        currentCategory: action.payload.currentCategory,
        userAnswers: newUserAnswers,
      });
      return newState;
    }
    case ActionType.END_GAME: {
      Object.assign(newState, state, {
        questions: [],
        totalScore: 0,
        currentQuestionIndex: 0,
        currentQuestion: "",
        currentCategory: "",
        userAnswers: [],
      });
      return newState;
    }
    default:
      return state;
  }
};

export default gameReducer;
