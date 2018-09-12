import { connect } from 'react-redux';
import AppNavigator from './app-navigator';
import { reduxifyNavigator, } from 'react-navigation-redux-helpers';
import { BackHandler } from 'react-native'
import { NavigationActions } from 'react-navigation'

const ReduxifyApp = reduxifyNavigator(AppNavigator, 'root');

class AppNavigatorWithState extends ReduxifyApp {
  onBackPress = () => {
    //Cuando le hagas click al back de android
    this.props.dispatch(
      NavigationActions.back({
        key: null
      })
    )
    return true
  }

  componentWillMount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress)
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
  }

}

function mapStateToProps(state) {
  return {
    state: state.navigation
  }
}

export default connect(mapStateToProps)(AppNavigatorWithState)