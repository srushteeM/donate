import React,{Component} from 'react'
import {Text,View,Icon} from 'react-native'
import {createBottomTabNavigator} from 'react-navigation-tabs'

import DonateScreen from '../screens/DonateScreen'
import RequestScreen from '../screens/RequestScreen'

export const TabNavigator =  createBottomTabNavigator({
Donate :{
    screen : DonateScreen,
        navigationOptions:{
         //  tabBarIcon : <Icon name = "hand-holding-medical" type = "font-awesome" size = {25} /> , 
           tabBarLabel : 'Donate'
       }
},

Request :{
    screen : RequestScreen,
    navigationOptions:{
       // tabBarIcon : <Icon name = "shopping-basket" type = "font-awesome" size = {25} /> , 
        tabBarLabel : 'Request'
    }
}

})