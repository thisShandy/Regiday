import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export type Props = {
  image: string,
  title: string,
  last: boolean,
}

const PreviewScreen: React.FC<Props> = (props) => {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.head}>Hello</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  head: {
    fontFamily: "Poppins-Thin",
  }
});

export default PreviewScreen;
