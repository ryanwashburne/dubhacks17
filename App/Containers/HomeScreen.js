// React
import React, { Component, PropTypes } from 'react';

// Redux
import { connect } from 'react-redux';
import HomeActions from '../Redux/HomeRedux';
import OfferActions from '../Redux/OfferRedux';

// UI
import { View, Image, Modal } from 'react-native';
import { Content, Container, Title, Header, Left, Body, Right, Text } from 'native-base';
import { Thumbnail, List, ListItem, Icon } from 'native-base';
import { Footer, FooterTab, Button, Spinner, Item } from 'native-base';

import DetailsScreen from './DetailsScreen';

class HomeScreen extends Component {
	state = {
		selected: false,
	};

	componentWillMount() {
		const { getAppointment, getOffers } = this.props;
		getAppointment('123');
		getOffers('123');
	}

	render() {
		const { deleteAppointment, confirmAppointment, appointment, navigation } = this.props;

		return (
			<View
				style={{
					flex: 1,
					backgroundColor: '#eee',
				}}
			>
				<View
					style={{
						position: 'absolute',
						top: 0,
						left: 0,
						width: '100%',
						height: '100%',
					}}
				>
					<Image
						style={{
							width: 380,
							height: '100%',
							resizeMode: 'center',
						}}
						source={appointment ?
							(appointment.status ? require('../../images/scheduled.png') : require('../../images/awaiting.png')) :
							require('../../images/empty.png')
						}
					/>
				</View>
				<View
					style={{
						flex: 1,
						backgroundColor: 'transparent',
					}}
				>
					<Container>
						<Content>
							<Modal
								animationType="slide"
								transparent={false}
								visible={this.state.selected}
							>
								<DetailsScreen
									onCancel={() => this.setState({ selected: false })}
									onConfirm={() => {
										confirmAppointment('123');
										this.setState({ selected: false });
									}}
								/>
							</Modal>
                            <View style={{height: 600}}>
                                <Button
									transparent
									onPress={() => {
										if (appointment && !appointment.status) {
											this.setState({ selected: !this.state.selected });
										}
									}}
									style={{width: 380, height: '100%'}}
								>
                                    <Text style={{color: 'transparent'}}>Select</Text>
                                </Button>
                            </View>
                        </Content>
						<Footer style={{height: 60}}>
							{ !appointment &&
								<Button transparent full onPress={() => navigation.navigate('NewAppointmentScreen')}>
									<Text style={{color: '#3341D1'}}>Get Started</Text>
								</Button>
							}
							{ appointment && !appointment.status &&
								<Button transparent full onPress={() => navigation.navigate('NewAppointmentScreen')}>
									<Text style={{color: '#3341D1'}}>Edit Symptoms</Text>
								</Button>
							}
							{ appointment && appointment.status &&
								<Button transparent full onPress={() => deleteAppointment('123')}>
									<Text style={{color: '#3341D1'}}>Cancel Appointment</Text>
								</Button>
							}
						</Footer>
					</Container>
				</View>
			</View>
		);
	}
}

HomeScreen.propTypes = {

};

const mapStateToProps = state => {
	return {
		appointment: state.home.appointment,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		getAppointment: (num) => dispatch(HomeActions.getRequest(num)),
		getOffers: (num) => dispatch(OfferActions.getRequestOffer(num)),
		deleteAppointment: (num) => dispatch(HomeActions.deleteRequest(num)),
		confirmAppointment: (num) => dispatch(OfferActions.postRequestOffer(num)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
