import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import PreviewScreen from "./PreviewScreen/PreviewScreen";

const MeetStack = createNativeStackNavigator();

const MeetScreen = () => {

  const meetScreens = [
    {
      title: "FirstMeetPage",
      next: "SecondMeetPage",
      image: require("~content/user/meet/img/firstPageIcon.png"),
      text: "Just use this app and it'll understand how to make you better",
      last: false,
    },
    {
      title: "SecondMeetPage",
      next: "ThirdMeetPage",
      image: require("~content/user/meet/img/secondPageIcon.png"),
      text: "Meet new friends and achieve goals together",
      last: false,
    },
    {
      title: "ThirdMeetPage",
      next: "Login",
      image: require("~content/user/meet/img/thirdPageIcon.png"),
      text: "Make yourself better!",
      last: true,
    },
  ]

  return (
    <MeetStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {
        meetScreens.map(item => (
          <MeetStack.Screen key={item.title} name={item.title}>
            {() => <PreviewScreen { ...item } />}
          </MeetStack.Screen>
        ))
      }
    </MeetStack.Navigator>
  );
};

export default MeetScreen;
