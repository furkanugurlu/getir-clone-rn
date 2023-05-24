import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native'
import React, { FC } from 'react'
import { Entypo } from '@expo/vector-icons'
import { Product } from '../../types'
import { useNavigation } from '@react-navigation/native'

const { width, height } = Dimensions.get('window')

interface ProductItemPropsType {
   item: Product
   ml?: number
   isDiscount?: boolean
}
const ProductItem: FC<ProductItemPropsType> = ({ item, ml, isDiscount }) => {
   const navigation = useNavigation()
   return (
      <TouchableOpacity
         onPress={() => navigation.navigate('ProductDetail', { product: item })}
         style={[
            styles.productWrapper,
            {
               marginLeft: ml || 0,
            },
         ]}
      >
         <Image style={styles.productImageStyle} source={{ uri: item.image }} />
         <View style={styles.productDetailsWrapper}>
            <Text style={styles.productPriceText}>
               {!isDiscount && (
                  <Text style={{ textDecorationLine: 'line-through' }}>
                     <Text>{'\u20BA'}</Text>
                     {item.fiyatIndirimli}
                  </Text>
               )}
               <Text style={{ color: '#5d3ebd', fontSize: 12 }}>
                  {isDiscount ? '' : ' '}
                  <Text>{'\u20BA'}</Text>
                  {item.fiyat}
               </Text>
            </Text>
            <Text style={styles.productNameText}>{item.name}</Text>
            <Text style={styles.productAmountText}>{item.miktar}</Text>
         </View>
         <View style={styles.addBtnStyle}>
            <Entypo name="plus" size={22} color="#5d3ebd" />
         </View>
      </TouchableOpacity>
   )
}

export default ProductItem

const styles = StyleSheet.create({
   productWrapper: {
      width: width * 0.28,
      marginTop: 12,
      height: height * 0.23,
      marginBottom: 5,
   },
   productImageStyle: {
      width: width * 0.3,
      height: width * 0.28,
      alignSelf: 'center',
      borderRadius: 12,
      borderWidth: 0.2,
      borderColor: 'lightgrey',
   },
   productDetailsWrapper: {
      marginTop: 10,
      flexDirection: 'column',
   },
   productPriceText: {
      fontSize: 12,
      color: '#747990',
   },
   productNameText: {
      fontSize: 13,
      fontWeight: '600',
   },
   productAmountText: {
      color: '#747990',
      fontSize: 12,
      marginTop: 4,
      fontWeight: '500',
   },
   addBtnStyle: {
      width: 30,
      height: 30,
      borderWidth: 0.3,
      borderColor: 'lightgrey',
      backgroundColor: 'white',
      position: 'absolute',
      right: -6,
      top: -7,
      borderRadius: 6,
      justifyContent: 'center',
      alignItems: 'center',
      shadowRadius: 3.8,
      shadowOpacity: 0.05,
   },
})
