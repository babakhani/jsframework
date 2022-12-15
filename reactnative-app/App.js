import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native'

import 'react-native-gesture-handler';
import MaterialCommunityIcons        from 'react-native-vector-icons/MaterialCommunityIcons'
import { Provider as PaperProvider } from 'react-native-paper'
import { NavigationContainer }        from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator }   from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'

import HomePage from './pages/home.js'
import KitchenPage from './pages/kitchen.js'
import SettingPage from './pages/setting.js'
import DbPage from './pages/db.js'

//import PrivateRoutes from './lib/router.js'
import PrivateRoutes from './lib/router.js'

const linking = { };

const Drawer = createDrawerNavigator()

const App = () => {
  return (
    <NavigationContainer linking={linking} >
    <Drawer.Navigator>
        <Drawer.Screen
          name="home"
          component={HomePage}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="kitchen"
          component={KitchenPage}
          options={{ 
            headerShown:  true,
            initialRouteName: 'kitchen',
            tabBarLabel: 'kitchen',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="map" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="setting"
          component={SettingPage}
          options={{ 
            headerShown:  true,
            initialRouteName: 'setting',
            tabBarLabel: 'setting',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="cog" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="db"
          component={DbPage}
          options={{ 
            headerShown:  true,
            initialRouteName: 'db',
            tabBarLabel: 'DB',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="cog" color={color} size={size} />
            ),
          }}
        />
     </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App

      //<PrivateRoutes></PrivateRoutes>
    //<PaperProvider>
    //</PaperProvider>

