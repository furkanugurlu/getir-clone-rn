import { Text, Image, TouchableOpacity } from 'react-native'
import React, { FC, ReactNode } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import CategoryFilterScreen from '../screens/CategoryFilterScreen'
import ProductDetailScreen from '../screens/ProductDetailScreen'
import { Ionicons } from '@expo/vector-icons'
import { getFocusedRouteNameFromRoute, useNavigation } from '@react-navigation/native'
import { Foundation } from '@expo/vector-icons'

const Stack = createNativeStackNavigator()

const MyStack = ({ navigation, route }: any) => {
   const tabHiddenRoutes = ['ProductDetail']

   const returnOption = (title: string, headerLeft?: FC | null, headerRight?: FC | null) => {
      return {
         headerTintColor: 'white',
         headerStyle: { backgroundColor: '#5C3EBC' },
         headerBackTitle: '',
         headerTitle: () => {
            return <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}>{title}</Text>
         },
         ...(headerLeft && {
            headerLeft: headerLeft,
         }),
         ...(headerRight && {
            headerRight: headerRight,
         }),
      }
   }

   React.useLayoutEffect(() => {
      const routeName = getFocusedRouteNameFromRoute(route)
      if (tabHiddenRoutes.includes(routeName as string)) {
         navigation.setOptions({ tabBarStyle: { display: 'none' } })
      } else {
         navigation.setOptions({ tabBarStyle: { display: 'true' } })
      }
   }, [navigation, route])
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
            options={returnOption('Ürünler', null)}
         />
         <Stack.Screen
            name="ProductDetail"
            component={ProductDetailScreen}
            options={returnOption(
               'Ürün Detayı',
               () => {
                  return (
                     <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name="close" size={24} color="white" />
                     </TouchableOpacity>
                  )
               },
               () => {
                  return (
                     <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Foundation name="heart" size={24} color="#32177a" />
                     </TouchableOpacity>
                  )
               }
            )}
         />
      </Stack.Navigator>
   )
}
export default function HomeNavigator({ navigation, route }: any) {
   return <MyStack navigation={navigation} route={route} />
}
