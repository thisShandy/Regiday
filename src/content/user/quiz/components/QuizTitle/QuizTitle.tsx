import React from "react";
import { StyleSheet, Text, useColorScheme } from "react-native";
import DropShadow from "react-native-drop-shadow";

import { lightTheme, darkTheme } from "~constants/colorConstants";

export type Props = {
  title: string,
}

const QuizTitle: React.FC<Props> = ({ title }) => {

  const colorScheme = useColorScheme() === "light" ? lightTheme : darkTheme;

  return (
    <DropShadow
      style={{
        shadowColor: colorScheme.mainColor,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ ...styles.title, color: colorScheme.mainColor }}>{title}</Text>
    </DropShadow>
  );
};

const styles = StyleSheet.create({
  title: {
    marginTop: 30,
    fontFamily: "Poppins-Bold",
    textTransform: "uppercase",
    fontSize: 48,
  }
});

export default QuizTitle;
