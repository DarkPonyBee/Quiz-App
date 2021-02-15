export type QuestionObject = {
  category: string;
  question: string;
  correct_answer: string;
};

export type UserAnswer = {
  question: string;
  correct: string;
  answer: string;
};

export type AppContext = {
  userAnswers: Array<UserAnswer>;
  saveAnswer: Function;
  resetAnswers: Function;
};
