import React from "react";
import styled from "styled-components/native";
import { FontAwesome5 } from "@expo/vector-icons";

import colors from "../../config/colors";

interface ButtonProps {
  iconText: string;
  trueButton?: boolean;
  onPress: any;
}

export const AButton: React.FC<ButtonProps> = ({
  iconText,
  trueButton,
  onPress,
}) => {
  return (
    <AnswerButton trueButton={trueButton} onPress={onPress}>
      <FontAwesome5 name={iconText} size={28} style={{ color: colors.white }} />
    </AnswerButton>
  );
};

type AnswerButtonProps = {
  trueButton?: boolean;
};

const AnswerButton = styled.TouchableOpacity<AnswerButtonProps>`
  width: 100px;
  height: 100px;
  background-color: ${(props) =>
    props.trueButton ? colors.darkGreen : colors.red};
  justify-content: center;
  align-items: center;
  margin: 10px;
  border-radius: 3px;
`;
