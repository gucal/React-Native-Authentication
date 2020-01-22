import React, { Component } from 'react'
import { StatusBar, View, ActivityIndicator } from 'react-native'

export default class AuthLoading extends Component {

  componentDidMount() {
    this.props.navigation.navigate(true ? 'App' : 'Auth');
  }

  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>

    )
  }
}
