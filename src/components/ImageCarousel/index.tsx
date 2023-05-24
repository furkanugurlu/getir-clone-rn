import { View, Text, FlatList, Image, StyleSheet, Dimensions } from 'react-native'
import React, { FC, useState } from 'react'

interface ImageCarouselPropsType {
   images: string[]
}

const { width, height } = Dimensions.get('window')

const ImageCarousel: FC<ImageCarouselPropsType> = ({ images }) => {
   const [activeIndex, setActiveIndex] = useState(0)

   const onViewRef = React.useRef((viewableItems: any) => {
      if (viewableItems.viewableItems.length) {
         setActiveIndex(viewableItems.viewableItems[0].index || 0)
      }
   })
   const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 })
   const responsiveWidth = images.length * 10

   return (
      <View style={styles.carouselWrapper}>
         <FlatList
            data={images}
            style={styles.flatListStyle}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => (
               <Image resizeMode="stretch" source={{ uri: item }} style={styles.carouselImage} />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={width * 0.5}
            snapToAlignment="center"
            decelerationRate={'fast'}
            viewabilityConfig={viewConfigRef.current}
            onViewableItemsChanged={onViewRef.current}
         />
         <View>
            <View
               style={[
                  styles.dotWrapper,
                  {
                     width: responsiveWidth,
                  },
               ]}
            >
               {images.map((_, index) => (
                  <View
                     key={index}
                     style={[
                        styles.dotStyle,
                        {
                           backgroundColor: activeIndex == index ? '#5d3ebd' : '#f2f0fd',
                        },
                     ]}
                  />
               ))}
            </View>
         </View>
      </View>
   )
}

export default ImageCarousel

const styles = StyleSheet.create({
   carouselWrapper: {
      alignItems: 'center',
      width,
      backgroundColor: 'white',
      height: height * 0.25,
   },
   flatListStyle: {
      width: width * 0.5,
      height: height * 0.2,
   },
   carouselImage: {
      width: width * 0.5,
      height: height * 0.2,
   },
   dotWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 15,
   },
   dotStyle: {
      width: 8,
      height: 8,
      borderRadius: 4,
   },
})
