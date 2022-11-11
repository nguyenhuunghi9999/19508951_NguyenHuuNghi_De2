import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Entypo , AntDesign, FontAwesome5, MaterialCommunityIcons} from '@expo/vector-icons'; 
import DetailsScreen from '../screens/DetailsScreen';
import HomeScreen from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();

const BottomNav = () => {
  return (
    <Tab.Navigator 
    backBehavior="home" 
    initialRouteName='Home'
    screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle:{...styles.tab},
        headerShown: false,
        tabBarHideOnKeyboard: true
    }} >
        <Tab.Screen name = "Home" component={HomeScreen} options={{
            tabBarIcon: ({ color }) => (
                <Entypo name="home" size={24} color="black"/>
              ),
        }}
        />
        <Tab.Screen name = "Detail" component={DetailsScreen} options={{
            tabBarIcon: ({ color }) => (
                <Entypo name="home" size={24} color="black"/>
              ),
        }}
        />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
    tab:{
        elevation: 0 ,
        backgroundColor: "white",
        height: 60,
    },
})

export default BottomNav