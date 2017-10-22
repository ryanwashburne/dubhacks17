import React from 'react';
import { StackNavigator } from 'react-navigation';

import WelcomeScreen from '../Containers/WelcomeScreen';
import HomeScreen from '../Containers/HomeScreen';

const PrimaryNav = StackNavigator(
	{
		WelcomeScreen: { screen: WelcomeScreen },
		HomeScreen: { screen: HomeScreen },
	},
	{
		initialRouteName: 'WelcomeScreen',
		headerMode: 'none',
	}
);

export default PrimaryNav;
