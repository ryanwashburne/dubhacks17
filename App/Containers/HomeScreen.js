// React
import React, { Component, PropTypes } from 'react';

// Redux
import { connect } from 'react-redux';
// import WelcomeActions from '../Redux/WelcomeRedux';

// UI
import { View } from 'react-native';
import { Content, Container, Title, Header, Left, Body, Right, Text } from 'native-base';
import { Thumbnail, List, ListItem, Icon } from 'native-base';
import { Footer, FooterTab, Button } from 'native-base';

import NewAppointment from '../Components/NewAppointment';
import ViewAppointment from '../Components/ViewAppointment';

class HomeScreen extends Component {
	state = {
		// appointment: {
        //     type: 'Back Pains',
		// 	location: '123 ABC St.',
		// 	time: '4:00pm',
		// 	status: 'Confirmed',
        // }
		appointment: undefined
	};

	render() {
		const { navigation } = this.props;
		return this.state.appointment ?
			<ViewAppointment appointment={this.state.appointment} /> :
			<NewAppointment />
		;
	}
}

HomeScreen.propTypes = {
	// submit: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
	return {};
};

const mapDispatchToProps = dispatch => {
	return {
		// submit: (phone) => dispatch(WelcomeActions.submitPhone(phone)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
