import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ImageBackground
} from "react-native";

import { appBackground } from "~constants/imageConstants";

import ScreenIcon from "~content/user/meet/components/ScreenIcon/ScreenIcon";
import MainButton from "~components/buttons/MainButton";

export type Props = {
  next: string,
  image: number,
  text: string,
  last: boolean,
};

const PreviewScreen: React.FC<Props> = ({ next, image, text, last }) => {

  return (
    <View style={styles.wrapper}>
      <ImageBackground
        style={styles.wrapper}
        resizeMode="cover"
        source={appBackground}
      >
        <SafeAreaView style={styles.container}>
          <ScreenIcon image={image} />
          <Text style={styles.description}>{text}</Text>
          <MainButton
            shadow={{
              position: "absolute",
              bottom: 15,
            }}
            next={ last ? "Auth" : next }
            title={ last ? "Login" : "Next" }
          />
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({

  wrapper: {
    flex: 1,
  },

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    marginHorizontal: 15,
  },

  description: {
    width: "90%",
    fontFamily: "Poppins-Light",
    fontSize: 20,
    textAlign: "center",
  },

});

export default PreviewScreen;
