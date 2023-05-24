import { Dimensions, StyleSheet } from 'react-native'

const { width } = Dimensions.get('window')
export default StyleSheet.create({
   listWrapper: {
      marginTop: 11,
      width: width * 0.25,
      height: width * 0.25,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
   },
   listImageStyle: {
      width: width * 0.18,
      height: width * 0.18,
      borderRadius: 8,
   },
   listText: {
      color: '#616161',
      fontSize: 12,
      fontWeight: '500',
   },
})
