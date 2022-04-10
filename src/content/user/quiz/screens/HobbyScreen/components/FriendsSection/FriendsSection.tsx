import React from "react";
import { StyleSheet, View, ScrollView, Dimensions } from "react-native";

import QuizSectionTitle from "~content/user/quiz/components/QuizSectionTitle/QuizSectionTitle";

import friends from "./lists/FriendsList";
import FriendItem from "~content/user/quiz/components/FriendItem/FriendItem";

export type Props = {

}

const windowWidth = Dimensions.get('window').width;

const FriendsSection: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <QuizSectionTitle title="Add a new friends" />
      <ScrollView
        contentContainerStyle={{ paddingLeft: (windowWidth-338)/3, }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {
          friends.map(item => <FriendItem key={item.uuid} props={item} />)
        }
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    marginTop: 28,
    alignItems: "center",
  },



});

export default FriendsSection;
