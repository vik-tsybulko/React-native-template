import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CounterView from './CounterView';
import {NavigationActions} from 'react-navigation';
import * as CounterStateActions from '../counter/CounterState';

export default connect(state => state)(CounterView);
