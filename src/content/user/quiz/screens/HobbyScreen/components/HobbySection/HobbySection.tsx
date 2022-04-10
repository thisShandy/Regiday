import React, { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Animated,
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

import hobbiesList from "./lists/HobbiesList";
import HobbyItem from "./components/HobbyItem/HobbyItem";

export type Props = {

}

const windowWidth = Dimensions.get('window').width;

const HobbySection: React.FC<Props> = () => {

  const [ isOpen, setOpen ] = useState(false);
  const [ arrowPosition, setArrowPosition ] = useState("0deg");
  const colorScheme = useColorScheme() === "light" ? lightTheme : darkTheme;

  const openHobbies = () => {
    if (!isOpen) {
      setArrowPosition("180deg");
    } else {
      setArrowPosition("0deg");
    }
    setOpen(!isOpen);
  };

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
          paddingHorizontal: 40,
          alignItems: "center",
          width: windowWidth * 0.90,
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
            <TouchableOpacity
              onPress={openHobbies}
              style={{
                ...styles.button,
                backgroundColor: colorScheme.mainColor
              }}>
              <Image style={{ ...styles.arrow, transform: [{ rotate: arrowPosition }] }} source={arrowDown} />
            </TouchableOpacity>
          </DropShadow>
        </View>
      </DropShadow>
      <DropShadow
        style={{
          shadowColor: colorScheme.darkColor,
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.05,
          shadowRadius: 10,
          paddingHorizontal: 40,
          alignItems: "center",
          width: windowWidth * 0.90,
          display: isOpen ? "flex" : "none",
        }}
      >
        <View style={{ ...styles.hobbiesContainer, backgroundColor: colorScheme.fieldColor }}>
          {
            hobbiesList.map((item, index) => {
              let last = false;
              if (index === hobbiesList.length-1) {
                last = true;
              }
              const props = { ...item, last };
              return <HobbyItem key={item.title} props={props} />;
            })
          }
        </View>
      </DropShadow>
    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    marginTop: 40,
    alignItems: "center",
    width: windowWidth,
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
  },

  hobbiesContainer: {
    width: windowWidth * 0.70,
    alignItems: "center",

    marginTop: 20,
    paddingVertical: 15,
    borderRadius: 16,
  }

});

export default HobbySection;
