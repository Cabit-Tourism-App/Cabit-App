import { View, Text } from 'react-native';
import React from 'react';

export default function WelcomeScreen() {
  return (
    <View className="flex-1 flex justify-end">

      {/* background image */}
      <Image 
          source={require('assets/splash.png')}
          className="h-full w-full absolute"
       />

       {/* content & gradient */}
       <View className="p-5 pb-10 space-y-8">
         <View className='space-y-3'>
             <Text className="text-white font-bold text-4xl">Traveling made easy!</Text>

         </View>
       </View>
    </View>
  )
}