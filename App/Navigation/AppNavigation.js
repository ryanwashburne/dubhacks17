import React from 'react';
import { StackNavigator } from 'react-navigation';

import HomeScreen from '../Containers/HomeScreen';
import NewAppointmentScreen from '../Containers/NewAppointmentScreen';
import AdditionalScreen from '../Containers/AdditionalScreen';

const PrimaryNav = StackNavigator(
	{
		HomeScreen: { screen: HomeScreen },
		NewAppointmentScreen: { screen: NewAppointmentScreen },
		AdditionalScreen: { screen: AdditionalScreen },
	},
	{
		initialRouteName: 'HomeScreen',
		headerMode: 'none',
	}
);

export default PrimaryNav;
