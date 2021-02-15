import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { ActivityIndicator } from "react-native";
import styled from "styled-components";

import colors from "../../config/colors";

interface ButtonProps {
  text: string;
  onPress: any;
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, onPress, isLoading }) => {
  return (
    <BeginButton onPress={onPress}>
      {isLoading ? (
        <ActivityIndicator size="small" color={colors.white} />
      ) : (
        <>
          <BeginButtonText>{text}</BeginButtonText>
        </>
      )}
    </BeginButton>
  );
};

const BeginButton = styled(TouchableOpacity)`
  width: 250px;
  height: 50px;
  background-color: ${colors.lightNavy};
  border-radius: 3px;
  justify-content: center;
  align-items: center;
`;

const BeginButtonText = styled(Text)`
  color: ${colors.white};
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  text-transform: uppercase;
`;

export default Button;
