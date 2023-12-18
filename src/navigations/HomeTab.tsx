import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons';
import Chat from '../screens/Book/Chat';
import Home from '../screens/Home';
import Music from '../screens/Music';
import History from '../screens/History';
import Notification from '../screens/Notification';

const Tab = createBottomTabNavigator();

const HomeTab = (): JSX.Element => {
  return (
   <Tab.Navigator>
    <Tab.Screen name='Home' component={Home} options={{tabBarLabel:"",tabBarIcon: ({color, size})=><Feather name="home" size={size} color={color} />}}/>
    <Tab.Screen name='Chat' component={Chat} options={{tabBarLabel:"",tabBarIcon: ({color, size})=><Feather name="calendar" size={size} color={color} />}}/>
    <Tab.Screen name='Music' component={Music} options={{tabBarLabel:"",tabBarIcon: ({color, size})=><Feather name="music" size={size} color={color} />}}/>
    <Tab.Screen name='History' component={History} options={{tabBarLabel:"",tabBarIcon: ({color, size})=><Feather name="clock" size={size} color={color} />}}/>
    <Tab.Screen name='Notification' component={Notification} options={{tabBarLabel:"",tabBarIcon: ({color, size})=><Feather name="bell" size={size} color={color} />}}/>
   </Tab.Navigator>
  )
}

export default HomeTab

const styles = StyleSheet.create({})