import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { FC } from 'react'
import styles from './styles'
import { Category } from '../../types'
import { useNavigation } from '@react-navigation/native'

type CategoryItemsPropsType = {
   item: Category
}

const CategoryItems: FC<CategoryItemsPropsType> = ({ item }) => {
   const navigation = useNavigation()
   return (
      <TouchableOpacity
         style={styles.listWrapper}
         onPress={() => navigation.navigate('CategoryDetails', { category: item })}
      >
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
