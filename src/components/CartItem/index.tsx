import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import { Product } from '../../types'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../../store/actions/CartActions/CartActions'

interface CartItemPropsType {
   product: Product
}

const { width, height } = Dimensions.get('window')
const CartItem: FC<CartItemPropsType> = ({ product }) => {
   const dispatch = useDispatch()
   return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
         <View style={styles.mainContain}>
            <View style={styles.leftContaine}>
               <Image source={{ uri: product.image }} style={styles.ımageStyle} />
               <View style={styles.textWrapper}>
                  <Text style={{ fontSize: 13, fontWeight: '600', color: '#000', maxWidth: width * 0.45 }}>
                     {product.name}
                  </Text>
                  <Text style={{ fontSize: 12, marginTop: 3, fontWeight: '500', color: '#848897' }}>
                     {product.miktar}
                  </Text>
                  <Text style={{ fontSize: 15, marginTop: 6, fontWeight: '500', color: '#5d3ebd' }}>
                     {'\u20ba'}
                     {product.fiyat}
                  </Text>
               </View>
            </View>
            <View style={styles.rightContaine}>
               <View style={styles.productCountWrapper}>
                  <TouchableOpacity
                     onPress={() => dispatch(removeFromCart(product) as any)}
                     style={styles.productCountRowContain}
                  >
                     <Text style={styles.productCountRowContainText}>-</Text>
                  </TouchableOpacity>
                  <View style={[styles.productCountRowContain, { backgroundColor: '#5d3ebd' }]}>
                     <Text style={[styles.productCountRowContainText, { color: 'white' }]}>1</Text>
                  </View>
                  <View style={styles.productCountRowContain}>
                     <Text style={styles.productCountRowContainText}>+</Text>
                  </View>
               </View>
            </View>
         </View>
      </View>
   )
}

export default CartItem
const styles = StyleSheet.create({
   mainContain: {
      height: height * 0.13,
      marginHorizontal: width * 0.04,
      backgroundColor: 'white',
      justifyContent: 'space-between',
      flexDirection: 'row',
      borderBottomColor: 'lightgray',
      borderBottomWidth: 0.4,
   },
   leftContaine: {
      flexDirection: 'row',
      alignItems: 'center',
   },
   ımageStyle: {
      width: width * 0.2,
      height: height * 0.09,
      borderWidth: 0.4,
      borderColor: 'lightgray',
      borderRadius: 8,
   },
   textWrapper: {
      marginLeft: 8,
   },
   rightContaine: {
      alignItems: 'center',
      justifyContent: 'center',
   },
   productCountWrapper: {
      shadowColor: '#000',
      shadowOffset: {
         width: 0,
         height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
      paddingHorizontal: 2,
      flexDirection: 'row',
      width: width * 0.21,
      borderColor: 'lightgray',
      borderWidth: 0.5,
      borderRadius: 7,
      justifyContent: 'space-between',
      height: height * 0.035,
      alignItems: 'center',
   },
   productCountRowContain: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      height: height * 0.035,
      backgroundColor: '#',
   },
   productCountRowContainText: {
      color: '#5d3ebd',
      fontWeight: 'bold',
      fontSize: 12,
   },
})
