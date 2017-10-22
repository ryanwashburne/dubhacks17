// React
import React, { Component, PropTypes } from 'react';

// Redux
import { connect } from 'react-redux';
import OfferActions from '../Redux/OfferRedux';

// UI
import MapView from 'react-native-maps';
import { View, Modal } from 'react-native';
import { Content, Container, Title, Header, Left, Body, Right, Text, Button, Icon } from 'native-base';
import { Item } from 'native-base';

class Offer extends Component {
	render() {
		const { offer, acceptOffer, declineOffer } = this.props;
        const style = {

        };

		return (
			<View>
                <Text>{JSON.stringify(offer)}</Text>
                <Button onPress={() => acceptOffer('123')}>
                    <Text>Accept</Text>
                </Button>
                <Button onPress={() => declineOffer('123')}>
                    <Text>Decline</Text>
                </Button>
			</View>
		);
	}
}

// ViewAppointment.propTypes = {
// 	appointment: PropTypes.object.isRequired,
// };

const mapStateToProps = state => {
	return {};
};

const mapDispatchToProps = dispatch => {
	return {
		acceptOffer: (num) => dispatch(OfferActions.postRequestOffer(num)),
        declineOffer: (num) => dispatch(OfferActions.deleteRequestOffer(num)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Offer);
