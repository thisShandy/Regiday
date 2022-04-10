import React from "react";
import { StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MeetScreen from "~content/user/meet/srceens/MeetScreen";
import AuthScreen from "~content/user/auth/screeens/AuthScreen";
import QuizScreen from "~content/user/quiz/screens/QuizScreen"

export type Props = {

}

const Stack = createNativeStackNavigator();

const App: React.FC<Props> = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Meet" component={MeetScreen} />
        <Stack.Screen name="Auth" component={AuthScreen} />
        <Stack.Screen name="Quiz" component={QuizScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({

});

export default App;
