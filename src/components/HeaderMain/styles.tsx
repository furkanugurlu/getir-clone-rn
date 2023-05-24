import { Dimensions, StyleSheet } from 'react-native'

const { height } = Dimensions.get('window')
export default StyleSheet.create({
   headerWrapper: {
      height: height * 0.064,
      backgroundColor: '#F7D102',
      flexDirection: 'row',
   },
   headerLeft: {
      width: '80%',
      height: height * 0.064,
      backgroundColor: 'white',
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: '3%',
      borderTopRightRadius: 25,
      borderBottomRightRadius: 25,
   },
   headerLeftImage: {
      width: 30,
      height: 30,
   },
   headerLeftTextWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 8,
      paddingLeft: 8,
      borderLeftColor: '#F3F2FD',
      borderLeftWidth: 2,
   },
   headerRight: {
      width: '20%',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
   },
})
