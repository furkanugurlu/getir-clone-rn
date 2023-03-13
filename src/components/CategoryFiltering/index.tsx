import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native'
import React, { FC, useState } from 'react'
import categoriesDummyData from '../../../assets/categoriesDummyData'
import { Category } from '../../types'

const { width, height } = Dimensions.get('window')

interface CategoryFilteringPropsType {
   category: Category
}

type CategoryOnlyName = Pick<Category, 'name'>
interface CategoryBoxPropsType {
   item: CategoryOnlyName
   active: CategoryOnlyName
}

const CategoryBox = ({ item, active }: CategoryBoxPropsType) => {
   return (
      <View
         style={[
            styles.boxWrapper,
            {
               borderBottomColor: item.name == active.name ? '#FFD00C' : '',
               borderBottomWidth: item.name == active.name ? 2 : 0,
            },
         ]}
      >
         <Text style={styles.boxTextStyle}>{item.name}</Text>
      </View>
   )
}

const CategoryFiltering: FC<CategoryFilteringPropsType> = ({ category }) => {
   const [categories, setCategories] = useState<Category[]>(categoriesDummyData)
   return (
      <ScrollView horizontal showsHorizontalScrollIndicator={false} bounces={true} style={styles.wrapper}>
         {categoriesDummyData.map((item) => (
            <CategoryBox key={item.id} item={item} active={category} />
         ))}
      </ScrollView>
   )
}

export default CategoryFiltering

const styles = StyleSheet.create({
   wrapper: {
      width: '100%',
      height: height * 0.065,
      backgroundColor: '#7849F7',
   },
   boxWrapper: {
      paddingHorizontal: 9,
      flexDirection: 'row',
      alignItems: 'center',
   },
   boxTextStyle: {
      fontSize: 14,
      color: 'white',
      fontWeight: '600',
   },
})
