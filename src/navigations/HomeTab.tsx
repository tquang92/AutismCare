import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Chat from '../screens/Chat';
import { Entypo } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();

const HomeTab = () => {
  return (
   <Tab.Navigator screenOptions={{headerShown: false}}>
    <Tab.Screen name='Home' component={Chat} options={{tabBarLabel:"",tabBarIcon: ({color, size})=><Entypo name="home" size={size} color={color} />}}/>
   </Tab.Navigator>
  )
}

export default HomeTab

const styles = StyleSheet.create({})