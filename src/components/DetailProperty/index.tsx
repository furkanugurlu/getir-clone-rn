import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Feather } from '@expo/vector-icons'

const DetailProperty = () => {
   const [details, setDetails] = useState<string[]>([
      'Sütlü kıtır çikolata ve badem parçacıklarıyla kaplı vanilya lezzeti',
      'İçindekiler',
      'Besin Değerleri',
      'Kullanım',
      'Ek Bilgiler',
   ])

   const TextComponent = ({ detail, index }: { detail: string; index: number }) => {
      return (
         <View
            style={[
               styles.textCompWrapper,
               {
                  borderBottomWidth: index == details.length - 1 ? 0 : 0.4,
               },
            ]}
         >
            <Text
               style={{
                  fontSize: index == 0 ? 11 : 13,
                  color: index == 0 ? 'black' : '#687482',
                  fontWeight: index == 0 ? '400' : '500',
               }}
            >
               {detail}
            </Text>
            {index != 0 && <Feather name="chevron-down" size={24} color="#9f9f9f" />}
         </View>
      )
   }
   return (
      <View style={styles.container}>
         {details.map((item, index) => (
            <TextComponent key={index} index={index} detail={item} />
         ))}
      </View>
   )
}

export default DetailProperty

const styles = StyleSheet.create({
   container: {
      backgroundColor: 'white',
      paddingHorizontal: 15,
      paddingVertical: 8,
   },
   textCompWrapper: {
      paddingVertical: 12,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottomColor: 'lightgray',
   },
})
