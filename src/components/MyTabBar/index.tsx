import React, { FC, useState } from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Entypo, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native'

interface MyTabBarPropsType {
   state: any
   descriptors: any
   navigation: any
}
const MyTabBar: FC<MyTabBarPropsType> = ({ state, descriptors, navigation }) => {
   const CustomTabBarButton = ({ focus, onPress }: { focus: boolean; onPress: () => void }) => {
      return (
         <TouchableOpacity
            onPress={onPress}
            style={{
               width: 58,
               height: 58,
               backgroundColor: focus ? '#FFD00C' : '#5C3EBC',
               justifyContent: 'center',
               alignItems: 'center',
               borderRadius: 29,
               marginTop: -14,
               borderWidth: 2,
               borderColor: 'white',
            }}
         >
            <Entypo name="list" size={24} color={!focus ? '#FFD00C' : '#5C3EBC'} />
         </TouchableOpacity>
      )
   }
   const tabHiddenRoutes = ['ProductDetail', 'CartScreen']
   const [isShow, setIsShow] = useState<boolean>(true)

   return (
      <View
         style={[
            {
               flexDirection: 'row',
               height: 79,
               display: isShow ? 'flex' : 'none',
               borderTopColor: 'lightgray',
               borderTopWidth: 0.5,
            },
         ]}
      >
         {state.routes.map((route: any, index: number) => {
            React.useLayoutEffect(() => {
               const routeName = getFocusedRouteNameFromRoute(route)
               if (tabHiddenRoutes.includes(routeName as string)) {
                  setIsShow(false)
               } else {
                  setIsShow(true)
               }
            }, [navigation, route])

            const { options } = descriptors[route.key]

            const label =
               options.tabBarLabel !== undefined
                  ? options.tabBarLabel
                  : options.title !== undefined
                  ? options.title
                  : route.name

            const isFocused = state.index === index

            const onPress = () => {
               const event = navigation.emit({
                  type: 'tabPress',
                  target: route.key,
                  canPreventDefault: true,
               })
               if (!isFocused && !event.defaultPrevented) {
                  navigation.navigate({ name: route.name, merge: true })
               }
            }

            const color = isFocused ? '#5C3EBC' : '#959595'

            return (
               <TouchableOpacity
                  accessibilityRole="button"
                  accessibilityState={isFocused ? { selected: true } : {}}
                  accessibilityLabel={options.tabBarAccessibilityLabel}
                  testID={options.tabBarTestID}
                  onPress={onPress}
                  style={{
                     flex: 1,
                     backgroundColor: 'white',
                     justifyContent: 'space-between',
                     alignItems: 'center',
                     paddingTop: 10,
                  }}
               >
                  {label == 'Home' && <Entypo name="home" size={24} color={color} />}
                  {label == 'Search' && <FontAwesome name="search" size={24} color={color} />}
                  {label == 'List' && <CustomTabBarButton focus={isFocused} onPress={onPress} />}
                  {label == 'User' && <FontAwesome name="user" size={24} color={color} />}
                  {label == 'Gift' && <MaterialCommunityIcons name="gift" size={24} color={color} />}
               </TouchableOpacity>
            )
         })}
      </View>
   )
}

export default MyTabBar
