import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import ProductItem from '../ProductItem'
import productDummyData from '../../../assets/productDummyData'
import { Product } from '../../types'

const ProductContainer = () => {
   const [productItems] = useState<Product[]>(productDummyData)
   return (
      <View style={styles.container}>
         <View style={styles.oneProductView}>
            {productItems.slice(0, 2).map((item) => (
               <ProductItem ml={20} key={item.id} item={item} />
            ))}
         </View>
         <Text style={styles.sectionTitle}>Çubuk</Text>
         <View style={styles.twoProductView}>
            {productItems.slice(2).map((item) => (
               <ProductItem key={item.id} item={item} />
            ))}
         </View>
      </View>
   )
}

export default ProductContainer

const styles = StyleSheet.create({
   container: {},
   oneProductView: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'white',
   },
   sectionTitle: {
      color: 'gray',
      fontWeight: 'bold',
      padding: 14,
   },
   twoProductView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      backgroundColor: 'white',
      paddingHorizontal: 12,
   },
})
