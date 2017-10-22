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

class HomeScreen extends Component {
	render() {
		const { onCancel, onConfirm, deleteAppointment, appointment, navigation } = this.props;

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
						source={require('../../images/details.png')}
					/>
				</View>
				<View
					style={{
						flex: 1,
						backgroundColor: 'transparent',
					}}
				>
					<Container>
						<Content />
						<Footer style={{height: 60, backgroundColor: 'transparent'}}>
                            <Left>
                                <Button style={{backgroundColor: '#3341D1'}} onPress={() => {
                                    onCancel();
                                }}>
                                    <Text>Cancel</Text>
                                </Button>
                            </Left>
                            <Right>
                                <Button style={{backgroundColor: '#3341D1'}} onPress={() => onConfirm()}>
                                    <Text>Confirm</Text>
                                </Button>
                            </Right>
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
		deleteAppointment: (num) => dispatch(HomeActions.deleteRequest(num))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
