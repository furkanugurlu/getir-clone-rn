import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { CategoryItems } from '../'
import categoriesDummyData from '../../../assets/categoriesDummyData'
import { Category } from '../../types'

const MainCategories = () => {
   const [categories, setCategories] = useState<Category[]>(categoriesDummyData)
   return (
      <View style={styles.container}>
         <View style={styles.listWrapper}>
            {categories.map((item) => (
               <CategoryItems key={item.id} item={item} />
            ))}
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      paddingTop: 10,
   },
   listWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'wrap',
   },
})

export default MainCategories
