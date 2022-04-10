import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, useColorScheme, View } from "react-native";
import DropShadow from "react-native-drop-shadow";

import { lightTheme, darkTheme } from "~constants/colorConstants";

export type Props = {
  props: {
    image: number,
    title: string,
  }
}

const ChannelItem: React.FC<Props> = ({ props }) => {

  const [ isSelected, setSelected ] = useState(false);

  const changeSelection = () => {
    setSelected(!isSelected);
  };

  const colorScheme = useColorScheme() === "light" ? lightTheme : darkTheme;

  return (
    <DropShadow
      style={{
        shadowColor: colorScheme.darkColor,
        shadowOffset: {
          width: 0,
          height: 7,
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,
      }}
    >
      <TouchableOpacity
        onPress={changeSelection}
        style={{
          ...styles.container,
          backgroundColor: isSelected ? colorScheme.mainColor : colorScheme.fieldColor
        }}
      >
        <DropShadow
          style={{
            shadowColor: colorScheme.darkColor,
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.05,
            shadowRadius: 5,
          }}
        >
          <Image style={styles.image} source={props.image} />
        </DropShadow>
        <View style={styles.titleWrapper}>
          <Text
            style={{
              ...styles.title,
              color: isSelected ? colorScheme.lightColor : colorScheme.darkColor
            }}
          >{props.title}</Text>
        </View>
      </TouchableOpacity>
    </DropShadow>
  );
};

const styles = StyleSheet.create({

  container: {
    width: 145,
    height: 50,

    marginVertical: 12,
    paddingHorizontal: 12,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    borderRadius: 16,
  },

  image: {
    width: 26,
    height: 26,
  },

  titleWrapper: {
    flex: 1,
    paddingLeft: 10,
  },

  title: {
    marginTop: 1,
    fontFamily: "Poppins-Regular",
    fontSize: 12,
  }

});

export default ChannelItem;
