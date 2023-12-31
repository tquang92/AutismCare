import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "../data/items";
import Chat from "../screens/Book/Chat";
import BookHistory from "../screens/Book/BookHistory";

const BookStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="BookHistory" component={BookHistory}></Stack.Screen>
      <Stack.Screen name="Chat" component={Chat}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default BookStack;

const styles = StyleSheet.create({});
