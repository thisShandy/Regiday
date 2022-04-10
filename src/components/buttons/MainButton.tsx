import React from "react";
import { StyleSheet, Text, TouchableOpacity, useColorScheme } from "react-native";
import DropShadow from "react-native-drop-shadow";

import { lightTheme, darkTheme } from "~constants/colorConstants";

import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type StackParamList = {
  next: any,
}

type NavigationProps = StackNavigationProp<StackParamList>;

export type Props = {
  style?: any,
  shadow?: any,
  next: any,
  title: string,
}

const MainButton: React.FC<Props> = ({ style, shadow, next, title }) => {

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
        ...shadow
      }}
    >
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(next);
        }}
        style={{ ...styles.button, ...style, backgroundColor: colorScheme.mainColor }}
      >
        <Text style={{ ...styles.text, color: colorScheme.lightColor }}>{title}</Text>
      </TouchableOpacity>
    </DropShadow>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 95,
    alignItems: "center",

    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
  },

  text: {
    fontFamily: "Poppins-Medium",
    fontSize: 16,
    textTransform: "uppercase",
  }
});

export default MainButton;
