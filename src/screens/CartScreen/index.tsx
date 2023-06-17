import { View, Text, FlatList, ScrollView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import productDummyData from '../../../assets/productDummyData'
import { CartItem, ProductItem } from '../../components'
import { useSelector } from 'react-redux'
import { AppState } from '../../store/reducers'

const { height, width } = Dimensions.get('window')
const index = () => {
   const { loading } = useSelector((state: AppState) => state.main)
   console.log({ loading })

   return (
      <View style={{ flex: 1 }}>
         <ScrollView style={{ marginBottom: height * 0.1 }} showsVerticalScrollIndicator={false}>
            <FlatList
               scrollEnabled={true}
               data={productDummyData.slice(0, 6)}
               keyExtractor={(_, index) => index.toString()}
               renderItem={({ item }) => <CartItem product={item} />}
            />

            <Text style={styles.recommendedProductTitle}>Önerilen Ürünler</Text>
            <FlatList
               scrollEnabled={true}
               horizontal
               style={{ backgroundColor: 'white' }}
               showsHorizontalScrollIndicator={false}
               data={productDummyData.slice(4, 8)}
               keyExtractor={(_, index) => index.toString()}
               renderItem={({ item }) => <ProductItem isDiscount item={item} ml={14} />}
            />
         </ScrollView>
         <View style={styles.continueWrapper}>
            <TouchableOpacity style={styles.continueBtn}>
               <Text style={styles.continueBtnText}>Devam Et</Text>
            </TouchableOpacity>
            <View style={styles.priceWrapper}>
               <Text style={styles.priceWrapperText}>{'\u20ba'}20.40</Text>
            </View>
         </View>
      </View>
   )
}

export default index

const styles = StyleSheet.create({
   recommendedProductTitle: {
      color: '#5d3ebd',
      padding: 12,
      fontSize: 15,
      fontWeight: 'bold',
   },
   continueWrapper: {
      width,
      height: height * 0.11,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: '4%',
      position: 'absolute',
      bottom: 0,
   },
   continueBtn: {
      height: height * 0.06,
      backgroundColor: '#5d3ebd',
      flex: 3,
      justifyContent: 'center',
      alignItems: 'center',
      borderTopLeftRadius: 8,
      borderBottomLeftRadius: 8,
   },
   continueBtnText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 15,
   },
   priceWrapper: {
      flex: 1,
      height: height * 0.06,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      borderTopRightRadius: 8,
      borderBottomRightRadius: 8,
   },
   priceWrapperText: {
      color: '#5d3ebd',
      fontSize: 15,
      fontWeight: 'bold',
   },
})
