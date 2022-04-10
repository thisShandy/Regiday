import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, Text, View, Image, useColorScheme } from "react-native";
import DropShadow from "react-native-drop-shadow";

import { lightTheme, darkTheme } from "~constants/colorConstants";

export type Props = {
  props: {
    uuid: string,
    name: string,
    photo: any,
    hobbies: string[],
  }
}

const FriendItem: React.FC<Props> = ({ props }) => {

  const [ isSelected, setSelected ] = useState(false);

  const changeSelection = () => {
    setSelected(!isSelected);
  };

  const colorScheme = useColorScheme() === "light" ? lightTheme : darkTheme;

  return (
    <DropShadow
      style={{
        shadowColor: isSelected ? colorScheme.mainColor : colorScheme.darkColor,
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
        <View style={styles.main}>
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
            <Image style={styles.photo} source={props.photo} />
          </DropShadow>
          <View style={styles.nameWrapper}>
            <Text
              style={{
                ...styles.name,
                color: isSelected ? colorScheme.lightColor : colorScheme.darkColor
              }}
            >{props.name}</Text>
          </View>
        </View>
        <View style={styles.hobbies}>
          {
            props.hobbies.map(item => (
              <Text
                key={item}
                style={{
                  ...styles.hobby,
                  color: isSelected ? colorScheme.lightColor : colorScheme.darkColor
                }}
              >{`• ${item}`}</Text>))
          }
        </View>
      </TouchableOpacity>
    </DropShadow>
  );
};

const styles = StyleSheet.create({

  container: {
    width: 145,
    height: 100,

    marginTop: 12,
    marginBottom: 40,
    marginHorizontal: 20,
    borderRadius: 16,
  },

  main: {
    flexDirection: "row",
    alignItems: "center",

    paddingVertical: 12,
    paddingHorizontal: 12,
  },

  photo: {
    width: 26,
    height: 26,
  },

  nameWrapper: {
    flex: 1,
    alignItems: "center",
  },

  name: {
    fontFamily: "Poppins-Medium",
    fontSize: 14,
  },

  hobbies: {
    paddingHorizontal: 12,
  },

  hobby: {
    paddingVertical: 1,

    fontFamily: "Poppins-Regular",
    fontSize: 12,
  }

});

export default FriendItem;
