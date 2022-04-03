import React from "react";
import {
  Image,
  useColorScheme,
  StyleSheet,
  Text,
  View
} from "react-native";
import DropShadow from "react-native-drop-shadow";

import { lightTheme, darkTheme } from "~constants/colorConstants";

export type Props = {
  image: number,
}

const ScreenIcon: React.FC<Props> = ({ image }) => {

  const colorScheme = useColorScheme() === "light" ? lightTheme : darkTheme;

  return (
    <View style={styles.container}>

      <DropShadow
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
        <Image
          style={styles.image}
          source={image}
        />
      </DropShadow>

      <DropShadow
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
        <Text style={{ ...styles.title, color: colorScheme.mainColor }}>Regiday</Text>
      </DropShadow>

    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    alignItems: "center",
  },

  image: {
    width: 232,
    height: 232,
  },

  title: {
    marginTop: 30,
    marginBottom: 10,
    fontFamily: "Poppins-Bold",
    fontSize: 48,
    textTransform: "uppercase",
  }

});

export default ScreenIcon;
