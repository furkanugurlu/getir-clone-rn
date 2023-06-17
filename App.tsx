import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import RootNavigator from './src/navigators/RootNavigator'
import store from './src/store/store'
import { LogBox } from 'react-native'
import { Provider } from 'react-redux'

export default function App() {
   LogBox.ignoreAllLogs()
   return (
      <Provider store={store}>
         <NavigationContainer>
            <RootNavigator />
         </NavigationContainer>
      </Provider>
   )
}
