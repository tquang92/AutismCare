import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "../data/items";
import Chat from "../screens/Book/Chat";
import BookHistory from "../screens/Book/BookHistory";
import BookOverView from "../screens/Book/BookOverView";
import Detail from "../screens/Book/Detail";

const BookStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="BookHistory" component={BookOverView}></Stack.Screen>
      <Stack.Screen name="Chat" component={Chat}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default BookStack;

const styles = StyleSheet.create({});
