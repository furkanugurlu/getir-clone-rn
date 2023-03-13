import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { FC } from 'react'
import styles from './styles'
import { Category } from '../../types'

type CategoryItemsPropsType = {
   item: Category
}

const CategoryItems: FC<CategoryItemsPropsType> = ({ item }) => {
   return (
      <TouchableOpacity style={styles.listWrapper}>
         <Image
            style={styles.listImageStyle}
            source={{
               uri: item?.src,
            }}
         />
         <Text style={styles.listText}>{item?.name}</Text>
      </TouchableOpacity>
   )
}

export default CategoryItems
