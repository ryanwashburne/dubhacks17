// React
import React, { Component, PropTypes } from 'react';

// Redux
import { connect } from 'react-redux';
import HomeActions from '../Redux/HomeRedux';

// UI
import { View } from 'react-native';
import { Content, Container, Title, Header, Left, Body, Right, Text } from 'native-base';
import { Thumbnail, List, ListItem, Icon } from 'native-base';
import { Footer, FooterTab, Button } from 'native-base';

import NewAppointment from '../Components/NewAppointment';
import ViewAppointment from '../Components/ViewAppointment';

class HomeScreen extends Component {
	componentWillMount() {
		const { getAppointment } = this.props;
		getAppointment('123');
	}

	render() {
		const { fetching, appointment, navigation } = this.props;
		if (fetching) {
			return <View><Text>Hi</Text></View>;
		}
		return appointment ?
			<ViewAppointment appointment={appointment} /> :
			<NewAppointment />
		;
	}
}

HomeScreen.propTypes = {

};

const mapStateToProps = state => {
	return {
		fetching: state.home.fetching,
		appointment: state.home.appointment,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		getAppointment: (num) => dispatch(HomeActions.getRequest(num)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
