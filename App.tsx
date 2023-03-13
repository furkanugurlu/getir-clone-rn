import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import RootNavigator from './src/navigators/RootNavigator'
import { LogBox } from 'react-native'

export default function App() {
   LogBox.ignoreAllLogs()
   return (
      <NavigationContainer>
         <RootNavigator />
      </NavigationContainer>
   )
}
