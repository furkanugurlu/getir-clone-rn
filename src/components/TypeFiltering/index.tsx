import { View, Text, ScrollView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const { height } = Dimensions.get('window')

const TypeBox = ({ item, onPress, activeIndex }: { item: string; onPress: () => void; activeIndex: string }) => {
   return (
      <TouchableOpacity
         onPress={onPress}
         style={[
            styles.typeBoxWrapper,
            item == activeIndex
               ? {
                    backgroundColor: '#5c3ebc',
                 }
               : { borderColor: '#F0EFF3', borderWidth: 1 },
         ]}
      >
         <Text
            style={[
               styles.typeBoxText,
               {
                  color: item == activeIndex ? '#ffffff' : '#7849f7',
               },
            ]}
         >
            {item}
         </Text>
      </TouchableOpacity>
   )
}
const TypeFiltering = () => {
   const [activeIndex, setActiveIndex] = useState<string>('Birlikte İyi Gider')
   return (
      <ScrollView bounces={true} horizontal showsHorizontalScrollIndicator={false} style={styles.wrapper}>
         <View style={{ height: height * 0.072, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10 }}>
            {['Birlikte İyi Gider', 'Çubuk', 'Kutu', 'Külah', 'Çoklu', 'Bar'].map((item, index) => (
               <TypeBox
                  activeIndex={activeIndex}
                  onPress={() => setActiveIndex(item)}
                  key={`item-${item}`}
                  item={item}
               />
            ))}
         </View>
      </ScrollView>
   )
}

export default TypeFiltering

const styles = StyleSheet.create({
   wrapper: {
      width: '100%',
      backgroundColor: 'white',
      height: height * 0.072,
   },
   typeBoxWrapper: {
      paddingHorizontal: 10,
      marginRight: 12,
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 6,
      height: '45%',
   },
   typeBoxText: {
      fontSize: 12,

      fontWeight: '600',
   },
})
