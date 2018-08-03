import React, { Component } from 'react';
import { View, Text, Alert } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';

class LoginScreen extends Component{
  render() {

    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Home' })],
    });

    return(
      <View>
        <Text onPress={() => this.props.navigation.dispatch(resetAction) }>LOGIN SCREEN</Text>
      </View>
    )
  }
}

export default LoginScreen;
