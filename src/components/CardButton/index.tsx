import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'

const { width, height } = Dimensions.get('window')
interface CardButtonProps {
   onPress?: () => void
}
const CardButton: FC<CardButtonProps> = ({ onPress }) => {
   return (
      <View style={styles.wrapper}>
         <TouchableOpacity onPress={onPress} style={styles.btn}>
            <Text style={styles.btnText}>Sepete ekle</Text>
         </TouchableOpacity>
      </View>
   )
}

export default CardButton

const styles = StyleSheet.create({
   wrapper: {
      width: '100%',
      backgroundColor: 'white',
      height: height * 0.13,
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      bottom: 0,
   },
   btn: {
      width: '90%',
      borderRadius: 8,
      height: height * 0.06,
      backgroundColor: '#5d39c1',
      alignItems: 'center',
      justifyContent: 'center',
   },
   btnText: {
      fontWeight: 'bold',
      color: 'white',
   },
})
