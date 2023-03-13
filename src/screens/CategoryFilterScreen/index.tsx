import { ScrollView } from 'react-native'
import React, { useState } from 'react'
import { CategoryFiltering, TypeFiltering, ProductItem, ProductContainer } from '../../components'

interface CategoryFilterScreenPropsType {
   route: any
}

const index = ({ route }: CategoryFilterScreenPropsType) => {
   const { category } = route.params

   return (
      <ScrollView>
         <CategoryFiltering category={category} />
         <TypeFiltering />
         <ProductContainer />
      </ScrollView>
   )
}

export default index
