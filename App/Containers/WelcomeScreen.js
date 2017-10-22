// React
import React, { AsyncStorage, Component, PropTypes } from 'react';

// Redux
import { connect } from 'react-redux';
import HomeActions from '../Redux/HomeRedux';

// UI
import { View } from 'react-native';
import { Content, Container, Title, Header, Left, Body, Right, Text } from 'native-base';
import { Thumbnail, List, ListItem, Icon } from 'native-base';
import { Footer, FooterTab, Button, Form, Item, Input } from 'native-base';

import NewAppointment from '../Components/NewAppointment';
import ViewAppointment from '../Components/ViewAppointment';

class HomeScreen extends Component {
    state = {
        num: undefined,
    };

    componentWillMount() {
        const { navigation } = this.props;
        // AsyncStorage.getItem('num').then((num) => {
        //     if (num !== null){
        //         navigation.navigate('HomeScreen');
        //     }
        // });
    }

	render() {
		const { fetching, appointment, navigation } = this.props;
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
                    <View>
                        <Form>
                            <Text>Other Information</Text>
                            <Item>
                                {/* <Input
                                    value={this.state.num}
                                    onChangeText={(num) => this.setState({ num: num })}
                                    keyboardType={'phone-pad'}
                                /> */}
                                <Input
									placeholder={'Phone Number'}
									ref={'num'}
									keyboardType={'phone-pad'}
                                    value={this.state.num}
                                    onChangeText={(num) => this.setState({ num: num })}
									underlineColorAndroid={'transparent'}
								/>
                            </Item>
                            <Button onPress={() => navigation.navigate('HomeScreen')}>
                                <Text>Continue</Text>
                            </Button>
                        </Form>
                    </View>
                </Content>
            </Container>
        );
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
