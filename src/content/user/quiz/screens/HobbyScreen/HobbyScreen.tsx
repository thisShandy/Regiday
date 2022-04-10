import React from "react";
import { SafeAreaView, StyleSheet, Text, useColorScheme, View } from "react-native";

import { lightTheme, darkTheme } from "~constants/colorConstants";

import QuizTitle from "~content/user/quiz/components/QuizTitle/QuizTitle";
import HobbySection from "./components/HobbySection/HobbySection";

export type Props = {

}

const HobbyScreen: React.FC<Props> = () => {

  const colorScheme = useColorScheme() === "light" ? lightTheme : darkTheme;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <QuizTitle title="QUIZ" />
        <HobbySection />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: "center",
  }

});

export default HobbyScreen;
