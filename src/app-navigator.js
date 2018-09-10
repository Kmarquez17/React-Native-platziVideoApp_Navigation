import React from 'react'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'

import Home from './screens/containers/home'
import Movie from './screens/containers/movie'
import Category from './screens/containers/category'
import Header from './sections/components/header'
import Profile from './screens/containers/profile'
import Lucky from './screens/containers/lucky'
import About from './screens/containers/about'
import Icon from './sections/components/Icon'

const Main = createStackNavigator(
    {
        Home: Home,
        Movie: Movie,
        Category: Category
    },
    {
        navigationOptions: {
            header: Header
        }
    }
)

const TabNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: Main,
            navigationOptions:{
                title: 'Inicio',
                tabBarIcon: <Icon icon="🏠"/>
            }
        },
        About: {
            screen: About,
        },
        Lucky: {
            screen: Lucky,
        },
        Profile: {
            screen: Profile,
        }
    },
    {
        tabBarOptions:{
            activeTintColor:'white',
            activeBackgroundColor:'#65a721'
        }
    }
)

export default TabNavigator