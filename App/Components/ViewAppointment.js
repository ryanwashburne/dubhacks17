// React
import React, { Component, PropTypes } from 'react';

// Redux
import { connect } from 'react-redux';
// import WelcomeActions from '../Redux/WelcomeRedux';

// UI
import MapView from 'react-native-maps';
import { View } from 'react-native';
import { Content, Container, Title, Header, Left, Body, Right, Text, Button, Icon } from 'native-base';

class ViewAppointment extends Component {
	render() {
		const { appointment } = this.props;
        const style = {
            map: {
                width: '100%',
                height: 300,
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
                    <MapView
                        style={style.map}
                        showsUserLocation
                        initialRegion={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    />
                    <View>
                        <Text>Type - { appointment.type }</Text>
                        <Text>Time - { appointment.time }</Text>
                        <Text>Location - { appointment.location }</Text>
                        <Text>Status - { appointment.status }</Text>
                    </View>
                    <View>
                        <Button>
                            <Text>Edit Details</Text>
                        </Button>
                        <Button>
                            <Text>Cancel Appointment</Text>
                        </Button>
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
	return {};
};

const mapDispatchToProps = dispatch => {
	return {
		// submit: (phone) => dispatch(WelcomeActions.submitPhone(phone)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewAppointment);
