import React from "react";
import { Text, Image, StyleSheet, useColorScheme } from "react-native";
import DropShadow from "react-native-drop-shadow";

import { lightTheme, darkTheme } from "~constants/colorConstants";

import { appLogo } from "~constants/imageConstants";

export type Props = {
  title: string,
}

const AuthHead: React.FC<Props> = ({ title }) => {

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
      <Image
        style={styles.logo}
        source={appLogo}
      />
      <Text style={{ ...styles.title, color: colorScheme.mainColor }}>{title}</Text>
    </DropShadow>
  );
};

const styles = StyleSheet.create({

  logo: {
    width: 164,
    height: 164,
  },

  title: {
    marginTop: 15,
    fontFamily: "Poppins-Bold",
    textTransform: "uppercase",
    fontSize: 48,
  }

});

export default AuthHead;
