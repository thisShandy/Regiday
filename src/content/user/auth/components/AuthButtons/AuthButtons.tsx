import React from "react";
import { StyleSheet, Text, TouchableOpacity, useColorScheme, View } from "react-native";
import DropShadow from "react-native-drop-shadow";

import { lightTheme, darkTheme } from "~constants/colorConstants";

import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type StackParamList = {
  "Register": undefined,
  "Quiz": undefined,
  "Login": undefined,
}

type NavigationProps = StackNavigationProp<StackParamList>;

export type Props = {
  reverse: boolean,
}

const AuthButtons: React.FC<Props> = ({ reverse }) => {

  const colorScheme = useColorScheme() === "light" ? lightTheme : darkTheme;

  const navigation = useNavigation<NavigationProps>();

  const singNavigate = () => {
    navigation.navigate("Register");
  };

  const continueRegistration = () => {
    navigation.navigate("Quiz");
  };

  const loginNavigate = () => {
    navigation.navigate("Login");
  };

  const continueLogin = () => {
    navigation.navigate("Login");
  };

  const buttons = [
    (
      <DropShadow
        key="register"
        style={{
          shadowColor: colorScheme.mainColor,
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.2,
          shadowRadius: 5,
        }}
      >
        <TouchableOpacity
          onPress={
            reverse ? continueRegistration : singNavigate
          }
          style={{ ...styles.button, backgroundColor: colorScheme.mainColor }}
        >
          <Text style={{ ...styles.text, color: colorScheme.lightColor }}>Sign up</Text>
        </TouchableOpacity>
      </DropShadow>
    ),
    (
      <DropShadow
        key="login"
        style={{
          shadowColor: colorScheme.mainColor,
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.2,
          shadowRadius: 5,
        }}
      >
        <TouchableOpacity
          onPress={
            reverse ? loginNavigate : continueLogin
          }
          style={{ ...styles.button, backgroundColor: colorScheme.mainColor }}
        >
          <Text style={{ ...styles.text, color: colorScheme.lightColor }}>Login</Text>
        </TouchableOpacity>
      </DropShadow>
    )
  ]

  return (
    <View style={styles.container}>
      {
        !reverse ?
          buttons.map(item => item) :
          buttons.reverse().map(item => item)
      }
    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    width: 256,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 48,
  },
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

export default AuthButtons;
