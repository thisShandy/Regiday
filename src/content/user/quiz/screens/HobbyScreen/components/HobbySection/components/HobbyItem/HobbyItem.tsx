import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet, Text, useColorScheme } from "react-native";

import { lightTheme, darkTheme } from "~constants/colorConstants";

export type Props = {
  props: {
    icon: string,
    title: string,
    last: boolean,
  }
}

const HobbyItem: React.FC<Props> = ({ props }) => {

  const colorScheme = useColorScheme() === "light" ? lightTheme : darkTheme;

  const [ active, setActive ] = useState(false);

  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        borderBottomColor: colorScheme.grayColor,
        borderBottomWidth: props.last ? 0 : 0.5,
      }}
    >
      <Text>{props.icon}</Text>
      <View style={styles.titleWrapper}>
        <Text>{props.title}</Text>

      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({

  container: {
    width: 200,
    flexDirection: "row",
    paddingVertical: 15,
  },
  icon: {
    fontSize: 16,
  },

  titleWrapper: {
    flex: 1,
    marginLeft: 10,
  },

  title: {
    fontFamily: "Poppins-Regular",
    fontSize: 12,
  },

});

export default HobbyItem;
