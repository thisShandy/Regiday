import React from "react";
import { SafeAreaView, StyleSheet, useColorScheme, View, TextInput } from "react-native";

import { lightTheme, darkTheme } from "~constants/colorConstants";

import AuthHead from "~content/user/auth/components/AuthHead/AuthHead";
import AuthButtons from "~content/user/auth/components/AuthButtons/AuthButtons";

export type Props = {

}

const LoginScreen: React.FC<Props> = () => {

  const colorScheme = useColorScheme() === "light" ? lightTheme : darkTheme;

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ ...styles.container,  }}>
        <AuthHead title="Login" />
        <TextInput
          style={{
            ...styles.filed,
            borderBottomColor: colorScheme.grayColor,
            color: colorScheme.darkColor,
            marginTop: 95,
          }}
          placeholder="Login"
          placeholderTextColor={colorScheme.grayColor}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="default"
        />
        <TextInput
          style={{
            ...styles.filed,
            borderBottomColor: colorScheme.grayColor,
            color: colorScheme.darkColor,
            marginBottom: 50,
          }}
          placeholder="Password"
          placeholderTextColor={colorScheme.grayColor}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="default"
          secureTextEntry={true}
        />
        <AuthButtons reverse={false} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  filed: {
    width: 256,
    borderBottomWidth: 0.4,

    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 30,

    fontFamily: "Poppins-Light",
    fontSize: 17,
  }

});

export default LoginScreen;
