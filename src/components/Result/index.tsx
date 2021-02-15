import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";
import { decode } from "html-entities";

import colors from "../../config/colors";

interface ResultProps {
  question: any;
  correct_answer: string;
  userAnswer: string;
}

interface AnswerResultProps {
  result: ResultProps;
}

const AnswerResult: React.FC<AnswerResultProps> = ({
  result: { question, correct_answer, userAnswer },
}) => {
  return (
    <AnswerContainer>
      <AnswerText questionAnswer={correct_answer} userAnswer={userAnswer}>
        {correct_answer}
      </AnswerText>

      <QuestionText>{decode(question)}</QuestionText>
    </AnswerContainer>
  );
};

const AnswerContainer = styled(View)`
  justify-content: space-between;
  align-items: flex-start;
  margin: 15px 10px;
  flex-grow: 1;
  flex: 1;
`;

interface AnswerTextProps {
  questionAnswer: string;
  userAnswer: string;
}

const AnswerText = styled.Text<AnswerTextProps>`
  color: ${(props) =>
    props.questionAnswer === props.userAnswer ? colors.green : colors.red};
  font-size: 15px;
  font-weight: 500;
  text-align: left;
`;

const QuestionText = styled(Text)`
  color: ${colors.darkGrey};
  font-size: 14px;
  font-weight: 500;
  text-align: left;
`;

export default AnswerResult;
