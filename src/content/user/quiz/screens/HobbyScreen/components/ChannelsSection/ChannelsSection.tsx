import React from "react";
import { Dimensions, SafeAreaView, StyleSheet, Text, useColorScheme, View } from "react-native";

import QuizSectionTitle from "~content/user/quiz/components/QuizSectionTitle/QuizSectionTitle";

import channels from "./lists/ChannelsList"
import ChannelItem from "~content/user/quiz/components/ChannelItem/ChannelItem";

export type Props = {

}

const windowWidth = Dimensions.get('window').width;

const ChannelsSection: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <QuizSectionTitle title="Join channels" />
      <View style={styles.channelList}>
        {
          channels.map(item => <ChannelItem key={item.title} props={item} />)
        }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    marginTop: 40,
    width: windowWidth,
    alignItems: "center",
  },

  channelList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  }

});

export default ChannelsSection;
