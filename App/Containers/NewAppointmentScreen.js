// React
import React, { Component, PropTypes } from 'react';

// Redux
import { connect } from 'react-redux';
import HomeActions from '../Redux/HomeRedux';

// UI
import { View, Image } from 'react-native';
import { Content, Container, Title, Header, Left, Body, Right, Text, Button } from 'native-base';
import { Footer, Label, Icon, Form, Input, Item } from 'native-base';
import { Card, CardItem } from 'native-base';

class NewAppointment extends Component {
    state = {
        selected: false,
    };

	render() {
		const { postAppointment, navigation } = this.props;

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
						source={this.state.selected ? require('../../images/add1.png') : require('../../images/add.png')}
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
                            <View style={{height: 600}}>
                                <Button transparent onPress={() => this.setState({ selected: !this.state.selected })} style={{width: 380, height: '100%'}}>
                                    <Text style={{color: 'transparent'}}>Select</Text>
                                </Button>
                            </View>
                        </Content>
						<Footer style={{height: 60}}>
                            <Left>
                                <Button transparent onPress={() => navigation.goBack()}>
    								<Text style={{color: '#3341D1'}}>Cancel</Text>
    							</Button>
                            </Left>
                            <Body />
                            <Right>
                                <Button
                                    transparent
                                    onPress={() => {
                                        if (this.state.selected) {
                                            navigation.navigate('AdditionalScreen');
                                        }
                                    }}
                                >
    								<Text style={{color: this.state.selected ? '#3341D1' : 'lightgray'}}>Next</Text>
    							</Button>
                            </Right>
						</Footer>
					</Container>
				</View>
			</View>
		);
	}
}

NewAppointment.propTypes = {
	// submit: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
	return {};
};

const mapDispatchToProps = dispatch => {
	return {
		postAppointment: (selected, other) => dispatch(HomeActions.postRequest(selected, other)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(NewAppointment);
