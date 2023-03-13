import { Text, Image } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import CategoryFilterScreen from '../screens/CategoryFilterScreen'

const Stack = createNativeStackNavigator()
const HomeNavigator = () => {
   return (
      <Stack.Navigator
         screenOptions={{
            headerBackTitleVisible: false,
         }}
      >
         <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
               headerStyle: { backgroundColor: '#5C3EBC' },
               headerTitle: () => {
                  return <Image source={require('../../assets/getirlogo.png')} style={{ width: 70, height: 30 }} />
               },
            }}
         />
         <Stack.Screen
            name="CategoryDetails"
            component={CategoryFilterScreen}
            options={{
               headerTintColor: 'white',
               headerStyle: { backgroundColor: '#5C3EBC' },
               headerBackTitle: '',
               headerTitle: () => {
                  return <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}>Ürünler</Text>
               },
            }}
         />
      </Stack.Navigator>
   )
}

export default HomeNavigator
