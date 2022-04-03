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

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

});

export default PreviewScreen;
