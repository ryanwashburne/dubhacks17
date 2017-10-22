// React
import React, { Component, PropTypes } from 'react';

// Redux
import { connect } from 'react-redux';
import HomeActions from '../Redux/HomeRedux';

// UI
import MapView from 'react-native-maps';
import { View, Modal } from 'react-native';
import { Content, Container, Title, Header, Left, Body, Right, Text, Button, Icon } from 'native-base';
import { Item } from 'native-base';

import Offer from './Offer';

class ViewAppointment extends Component {
	state = {
		modal: false,
	};

	render() {
		const { deleteAppointment, appointment, offer } = this.props;
        const style = {
            map: {
                width: '100%',
                height: 300,
            },
			item: {
				padding: 30,
			},
			text: {
				fontSize: 30,
			},
        };

		return (
            <Container>
                <Header>
					<Left />
					<Body>
						<Title>Facil</Title>
					</Body>
					<Right />
				</Header>
                <Content>
                    {/* <MapView
                        style={style.map}
                        showsUserLocation
                        initialRegion={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    /> */}
					<Modal
						animationType="slide"
						transparent={false}
						visible={this.state.modal}
						onRequestClose={() => {alert("Modal has been closed.")}}
					>
						<Header>
							<Left />
							<Body />
							<Right>
								<Button transparent onPress={() => this.setState({ modal: false })}>
									<Icon name="arrow-down" />
								</Button>
							</Right>
						</Header>
						{ offer &&
							<Offer />
						}
						<View>
	                        <Button onPress={() => deleteAppointment('123')}>
	                            <Text>Cancel Appointment</Text>
	                        </Button>
	                    </View>
					</Modal>
					<View>
						<Item style={style.item} button onPress={() => this.setState({modal: true})}>
							{ appointment.status === 'Pending' ? <Icon name="clock" style={{ fontSize: 60, paddingRight: 20 }} />: <Icon name="checkmark" style={{ fontSize: 60, paddingRight: 20 }} />}
							<Text style={style.text}>{ appointment.type }</Text>
							<Right>
								<Icon name={'checkmark'} style={{ fontSize: 60}} />
							</Right>
						</Item>
					</View>
                </Content>
            </Container>
		);
	}
}

// ViewAppointment.propTypes = {
// 	appointment: PropTypes.object.isRequired,
// };

const mapStateToProps = state => {
	return {
		offer: state.offer.offer,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		deleteAppointment: (num) => dispatch(HomeActions.deleteRequest(num)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewAppointment);
