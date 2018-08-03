import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {addNavigationHelpers} from 'react-navigation';

import AppNavigator from './Navigator';

class NavigatorView extends Component {


  render() {
    return (
      <AppNavigator
      />
    );
  }
}

export default NavigatorView;
