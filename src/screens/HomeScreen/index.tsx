import { ScrollView } from 'react-native'
import React from 'react'
import styles from './styles'
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
