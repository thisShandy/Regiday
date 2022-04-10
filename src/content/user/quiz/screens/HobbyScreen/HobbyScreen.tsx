import React from "react";
import { SafeAreaView, StyleSheet, ScrollView, Dimensions, View } from "react-native";

import QuizTitle from "~content/user/quiz/components/QuizTitle/QuizTitle";
import MainButton from "~/components/buttons/MainButton";

import HobbySection from "./components/HobbySection/HobbySection";
import ChannelsSection from "./components/ChannelsSection/ChannelsSection";
import FriendsSection from "./components/FriendsSection/FriendsSection";

export type Props = {

}

const windowHeight = Dimensions.get('window').height;

const HobbyScreen: React.FC<Props> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <QuizTitle title="QUIZ" />
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          <HobbySection />
          <ChannelsSection />
          <FriendsSection />
          <MainButton
            style={{
              alignSelf: "center",
              marginTop: 45,
              marginBottom: 100,
            }}
            next="ScheduleScreen"
            title="Next"
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    minHeight: windowHeight,
    alignItems: "center",
  },

});

export default HobbyScreen;
