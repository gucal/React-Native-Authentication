import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import HomeScreen from './src/screens/HomeScreen'
import LoginScreen from './src/auth/Login'
import AuthLoading from './src/AuthLoading'

const AppStack = createStackNavigator({ Home: HomeScreen }, { headerMode: 'none' })
const AuthStack = createStackNavigator({ Auth: LoginScreen }, { headerMode: 'none' })

export default createAppContainer(
  createSwitchNavigator
    ({
      AuthLoading: AuthLoading,
      App: AppStack,
      Auth: AuthStack
    },
      {
        initialRouteName: 'AuthLoading'
      }
    ))