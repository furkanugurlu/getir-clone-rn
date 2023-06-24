import { Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import React, { FC } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import CategoryFilterScreen from '../screens/CategoryFilterScreen'
import ProductDetailScreen from '../screens/ProductDetailScreen'
import CartScreen from '../screens/CartScreen'
import { Ionicons } from '@expo/vector-icons'
import { Foundation } from '@expo/vector-icons'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../store/reducers'
import { useGetTotalPrice } from '../hooks/useGetTotalPrice'
import { clearCart } from '../store/actions/CartActions/CartActions'

const Stack = createNativeStackNavigator()

const { width } = Dimensions.get('window')
const HomeNavigator = ({ navigation, route }: any) => {
   const { cart_data } = useSelector((state: AppState) => state.cart)
   const price = useGetTotalPrice(cart_data)

   const dispatch = useDispatch()

   const returnOption = (title: string, headerLeft?: FC | null | boolean, headerRight?: FC | null) => {
      return {
         headerTintColor: 'white',
         headerStyle: { backgroundColor: '#5C3EBC' },
         headerBackTitle: '',
         headerTitle: () => {
            return <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}>{title}</Text>
         },
         ...(headerLeft && {
            headerLeft: () => (
               <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Ionicons name="close" size={28} color="white" />
               </TouchableOpacity>
            ),
         }),
         ...(headerRight && {
            headerRight: headerRight,
         }),
      }
   }

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
            options={returnOption('Ürünler', null, () => {
               return (
                  <TouchableOpacity onPress={() => navigation.navigate('CartScreen')} style={styles.basketBtn}>
                     <Image source={require('../../assets/cart.png')} style={styles.basketBtnImage} />
                     <Text style={styles.basketBtnText}>
                        {'\u20BA'} {price}
                     </Text>
                  </TouchableOpacity>
               )
            })}
         />
         <Stack.Screen
            name="ProductDetail"
            component={ProductDetailScreen}
            options={returnOption('Ürün Detayı', true, () => {
               return (
                  <TouchableOpacity onPress={() => navigation.goBack()}>
                     <Foundation name="heart" size={24} color="#32177a" />
                  </TouchableOpacity>
               )
            })}
         />
         <Stack.Screen
            name="CartScreen"
            component={CartScreen}
            options={returnOption('Sepetim', true, () => (
               <TouchableOpacity onPress={() => dispatch(clearCart() as any)}>
                  <Ionicons name="trash-sharp" size={24} color="white" />
               </TouchableOpacity>
            ))}
         />
      </Stack.Navigator>
   )
}
export default HomeNavigator

const styles = StyleSheet.create({
   basketBtn: {
      width: width * 0.22,
      height: 33,
      backgroundColor: 'white',
      borderRadius: 9,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 4,
      justifyContent: 'space-between',
   },
   basketBtnImage: {
      width: 25,
      height: 25,
   },
   basketBtnText: {
      color: '#5d3ebd',
      fontWeight: 'bold',
      fontSize: 12,
   },
})
