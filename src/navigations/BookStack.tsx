import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "../data/items";
import BookOverView from "../screens/Book/BookOverView";
import Chat from "../screens/Book/Chat";

const BookStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="BookOverView" component={BookOverView}></Stack.Screen>
      <Stack.Screen name="Chat" component={Chat}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default BookStack;

const styles = StyleSheet.create({});
