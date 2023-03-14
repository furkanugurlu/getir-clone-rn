import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Product } from '../../types'
import { ImageCarousel, DetailBox, DetailProperty, CardButton } from '../../components'

interface ProductDetailPropsType {
   route: any
}
const index = ({ route }: ProductDetailPropsType) => {
   const product: Product = route.params.product

   return (
      <View style={{ flex: 1 }}>
         <ScrollView>
            <ImageCarousel images={product?.images} />
            <DetailBox product={product} />
            <Text style={styles.detailTitle}>Detaylar</Text>
            <DetailProperty />
         </ScrollView>
         <CardButton />
      </View>
   )
}

export default index

const styles = StyleSheet.create({
   detailTitle: {
      paddingHorizontal: 10,
      paddingVertical: 14,
      color: '#808b99',
      fontWeight: '600',
   },
})
