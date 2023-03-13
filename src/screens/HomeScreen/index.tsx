import { ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { HeaderMain, BannerCarousel, MainCategories } from '../../components'

const index = () => {
   return (
      <ScrollView stickyHeaderIndices={[0]} style={styles.container}>
         <HeaderMain />
         <BannerCarousel />
         <MainCategories />
      </ScrollView>
   )
}

export default index

const styles = StyleSheet.create({
   container: {
      backgroundColor: '#f5f5f5',
   },
})
