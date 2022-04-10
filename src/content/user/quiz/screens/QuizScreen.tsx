import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const QuizStack = createNativeStackNavigator();

import HobbyScreen from "./HobbyScreen/HobbyScreen";
import ScheduleScreen from "./ScheduleScreen/ScheduleScreen";

const QuizScreen = () => {
  return (
    <QuizStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <QuizStack.Screen name="HobbyScreen" component={HobbyScreen} />
      <QuizStack.Screen name="ScheduleScreen" component={ScheduleScreen} />
    </QuizStack.Navigator>
  );
};

export default QuizScreen;
