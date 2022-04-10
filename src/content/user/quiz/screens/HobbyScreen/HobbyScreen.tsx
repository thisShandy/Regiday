import React from "react";
import { SafeAreaView, StyleSheet, ScrollView, useColorScheme, View } from "react-native";

import { lightTheme, darkTheme } from "~constants/colorConstants";

import QuizTitle from "~content/user/quiz/components/QuizTitle/QuizTitle";
import HobbySection from "./components/HobbySection/HobbySection";
import ChannelsSection from "./components/ChannelsSection/ChannelsSection";
import FriendsSection from "./components/FriendsSection/FriendsSection";

export type Props = {

}

const HobbyScreen: React.FC<Props> = () => {

  const colorScheme = useColorScheme() === "light" ? lightTheme : darkTheme;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <QuizTitle title="QUIZ" />
        <ScrollView>
          <HobbySection />
          <ChannelsSection />
          <FriendsSection />
        </ScrollView>
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
