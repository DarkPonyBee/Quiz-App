import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components/native";
import { nextQuestion } from "../../actions/game-action";
import { QButton as Question } from "../../components/Quiz";
import { AButton as AnswerButton } from "../../components/Quiz";
import colors from "../../config/colors";
import { RootState } from "../../reducers";

export const QuizScreen = () => {
  const dispatch = useDispatch();

  const questions = useSelector((state: RootState) => state.reducers.questions);
  const currentQuestion = useSelector(
    (state: RootState) => state.reducers.currentQuestion
  );
  const currentCategory = useSelector(
    (state: RootState) => state.reducers.currentCategory
  );
  const currentQuestionIndex = useSelector(
    (state: RootState) => state.reducers.currentQuestionIndex
  );
  const totalScore = useSelector(
    (state: RootState) => state.reducers.totalScore
  );

  const onAnswerQuestion = (answer: string) =>
    dispatch(nextQuestion(questions, answer, currentQuestionIndex, totalScore));

  return (
    <QuizSafeArea>
      <CategoryTitle>{currentCategory}</CategoryTitle>
      <QuizContainer>
        <Question
          question={currentQuestion}
          actualQuestion={currentQuestionIndex + 1}
          questionsQuantity={questions.length}
        />

        <AnswerButtonContainer>
          <AnswerButton
            iconText="check"
            trueButton
            onPress={() => onAnswerQuestion("True")}
          />
          <AnswerButton
            iconText="close"
            onPress={() => onAnswerQuestion("False")}
          />
        </AnswerButtonContainer>
      </QuizContainer>
    </QuizSafeArea>
  );
};

const QuizSafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.iceWhite};
`;

const QuizContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
`;

const CategoryTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

const AnswerButtonContainer = styled.SafeAreaView`
  flex-direction: row;
  width: 250px;
  justify-content: space-between;
`;
