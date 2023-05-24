import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './styles'
import { Entypo } from '@expo/vector-icons'

const HeaderMain = () => {
   return (
      <View style={styles.headerWrapper}>
         <View style={styles.headerLeft}>
            <Image style={styles.headerLeftImage} source={{ uri: 'https://cdn.getir.com/misc/emoji/house.png' }} />
            <View style={styles.headerLeftTextWrapper}>
               <Text style={{ fontWeight: '600', fontSize: 16 }}>Ev</Text>
               <Text style={{ fontWeight: '500', fontSize: 11.5, color: '#6E7480', marginLeft: 6, marginRight: 2 }}>
                  Dedepaşa Blv, Yenişehir Mahallesi...
               </Text>
               <Entypo name="chevron-right" size={22} color="#5D3EBD" />
            </View>
         </View>
         <View style={styles.headerRight}>
            <Text style={{ fontSize: 10, fontWeight: 'bold', color: '#5D3EBD' }}>TVS</Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#5D3EBD' }}>
               13<Text style={{ fontSize: 16 }}>dk</Text>
            </Text>
         </View>
      </View>
   )
}

export default HeaderMain
