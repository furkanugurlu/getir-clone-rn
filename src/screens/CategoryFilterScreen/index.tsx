import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import { CategoryFiltering, TypeFiltering } from '../../components'
import { Category } from '../../types'

interface CategoryFilterScreenPropsType {
   route: any
}

const index = ({ route }: CategoryFilterScreenPropsType) => {
   const { category } = route.params

   return (
      <ScrollView>
         <CategoryFiltering category={category} />
         <TypeFiltering />
      </ScrollView>
   )
}

export default index
