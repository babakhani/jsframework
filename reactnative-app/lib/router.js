import {Button, SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native'

import { NavigationContainer }        from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomePage from '../pages/home.js'
import MapPage from '../pages/map.js'

const Stack = createNativeStackNavigator();

const PrivateRoutes = () => {
  return (
   <Stack.Navigator
    gestureEnabled={true}
    animationEnabled={true}
    screenOptions={{
      headerStyle: {
        backgroundColor: 'blue',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}
    >
     <Stack.Screen 
         name="home" 
         options={{
           title: 'This is Home page',
           headerStyle: {
             backgroundColor: '#f4511e',
           },
           headerTintColor: '#fff',
           headerTitleStyle: {
             fontWeight: 'bold',
           }
         }}
         component={HomePage} />
   </Stack.Navigator>
  );
}

export default PrivateRoutes;
