import React from "react";
import { StyleSheet, Text, useColorScheme } from "react-native";

import { lightTheme, darkTheme } from "~constants/colorConstants";

export type Props = {
  title: string,
}

const QuizSectionTitle: React.FC<Props> = ({ title }) => {

  const colorScheme = useColorScheme() === "light" ? lightTheme : darkTheme;

  return (
    <>
      <Text style={{ ...styles.title, color: colorScheme.darkColor }}>{title}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "Poppins-Medium",
    fontSize: 16,
  },
});

export default QuizSectionTitle;
