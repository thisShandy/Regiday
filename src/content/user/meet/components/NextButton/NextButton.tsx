import React from "react";
import { TouchableOpacity, StyleSheet, Text, useColorScheme } from "react-native";
import DropShadow from "react-native-drop-shadow";

import { lightTheme, darkTheme } from "~constants/colorConstants";

import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type StackParamList = {
  next: any,
}

type NavigationProps = StackNavigationProp<StackParamList>;

export type Props = {
  next: any,
  title: string,
}

const NextButton: React.FC<Props> = ({ next, title }) => {

  const colorScheme = useColorScheme() === "light" ? lightTheme : darkTheme;
  const navigation = useNavigation<NavigationProps>();

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
        position: "absolute",
        bottom: 15,
      }}
    >
      <TouchableOpacity
        style={{...styles.button, backgroundColor: colorScheme.mainColor }}
        onPress={() => {
          navigation.navigate(next);
        }}
      >
        <Text style={{ ...styles.text, color: colorScheme.lightColor }}>{title}</Text>
      </TouchableOpacity>
    </DropShadow>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },

  text: {
    fontFamily: "Poppins-Medium",
    fontSize: 18,
    textTransform: "uppercase",
  }
});

export default NextButton;
