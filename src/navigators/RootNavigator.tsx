import { View, Text, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Entypo, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'
import HomeNavigator from './HomeNavigator'
import { MyTabBar } from '../components'

const Tab = createBottomTabNavigator()
const RootNavigator = () => {
   return (
      <Tab.Navigator
         initialRouteName="Home"
         screenOptions={{
            headerShown: false,
            tabBarHideOnKeyboard: true,
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#5C3EBC',
            tabBarInactiveTintColor: '#959595',
            tabBarStyle: {
               height: 1000,
            },
         }}
         tabBar={(props) => <MyTabBar {...props} />}
      >
         <Tab.Screen name="Home" component={HomeNavigator} />
         <Tab.Screen name="Search" component={HomeNavigator} />
         <Tab.Screen name="List" component={HomeNavigator} />
         <Tab.Screen name="User" component={HomeNavigator} />
         <Tab.Screen name="Gift" component={HomeNavigator} />
      </Tab.Navigator>
   )
}

export default RootNavigator
