import { View, Text, StyleSheet } from 'react-native'
import React, { FC } from 'react'
import { Product } from '../../types'

interface DetailBoxPropsType {
   product: Product
}
const DetailBox: FC<DetailBoxPropsType> = ({ product }) => {
   const { fiyat, name, miktar } = product
   return (
      <View style={styles.wrapper}>
         <Text style={styles.price}>
            <Text>{'\u20BA'}</Text>
            {fiyat}
         </Text>
         <Text style={styles.name}>{name}</Text>
         <Text style={styles.quantity}>{miktar}</Text>
      </View>
   )
}

export default DetailBox

const styles = StyleSheet.create({
   wrapper: {
      width: '100%',
      alignItems: 'center',
      paddingTop: 12,
      backgroundColor: 'white',
      paddingBottom: 16,
   },
   price: {
      color: '#5d3ebd',
      fontWeight: 'bold',
      fontSize: 20,
   },
   name: {
      marginTop: 15,
      fontWeight: '700',
      fontSize: 16,
   },
   quantity: {
      marginTop: 8,
      fontWeight: '600',
      fontSize: 12,
      color: '#848897',
   },
})
