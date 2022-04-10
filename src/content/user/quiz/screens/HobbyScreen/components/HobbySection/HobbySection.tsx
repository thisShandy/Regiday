import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image,
  Dimensions,
  useColorScheme
} from "react-native";
import DropShadow from "react-native-drop-shadow";

import { lightTheme, darkTheme } from "~constants/colorConstants";

import { arrowDown } from "~constants/imageConstants";
import QuizSectionTitle from "~content/user/quiz/components/QuizSectionTitle/QuizSectionTitle";

export type Props = {

}

const windowWidth = Dimensions.get('window').width;

const HobbySection: React.FC<Props> = () => {

  const colorScheme = useColorScheme() === "light" ? lightTheme : darkTheme;

  return (
    <View style={styles.container}>
      <QuizSectionTitle title="Tell us about your hobby" />
      <DropShadow
        style={{
          shadowColor: colorScheme.darkColor,
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.05,
          shadowRadius: 10,
          width: windowWidth * 0.75,
        }}
      >
        <View style={{ ...styles.select, backgroundColor: colorScheme.fieldColor }}>
          <Text style={styles.selectTitle}>Select your hobby 🎯</Text>
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
            <TouchableOpacity style={{ ...styles.button, backgroundColor: colorScheme.mainColor }}>
              <Image style={styles.arrow} source={arrowDown} />
            </TouchableOpacity>
          </DropShadow>
        </View>
      </DropShadow>
    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    marginTop: 40,
    alignItems: "center",
    width: windowWidth * 0.75,
    height: 40,
  },

  select: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    width: "100%",
    height: 50,
    marginTop: 14,
    paddingHorizontal: 20,
    borderRadius: 16,
  },

  selectTitle: {
    fontFamily: "Poppins-Light",
    fontSize: 14,
  },

  button: {
    justifyContent: "center",
    alignItems: "center",

    borderRadius: 25,

    width: 32,
    height: 32,
  },

  arrow: {
    width: 14,
    height: 14,
  }

});

export default HobbySection;
