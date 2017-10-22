// React
import React, { Component, PropTypes } from 'react';

// Redux
import { connect } from 'react-redux';
import HomeActions from '../Redux/HomeRedux';

// UI
import { View } from 'react-native';
import { Content, Container, Title, Header, Left, Body, Right, Text, Button } from 'native-base';
import { Footer, Label, Icon, Form, Input, Item } from 'native-base';
import { Card, CardItem } from 'native-base';

class NewAppointment extends Component {
    state = {
        selected: [],
        other: '',
    };

	render() {
		const { postAppointment, navigation } = this.props;
        const style = {
            screen: {

            },
        };

        const types = [
            '1',
            '2',
            '3',
        ];

		return (
            <Container>
                <Header>
					<Left />
					<Body>
						<Title>Facil</Title>
					</Body>
					<Right />
				</Header>
                <Content padder>
                    {types.map((type, i) => {
                        return (
                            <Card
                                key={i}
                                style={{borderColor: this.state.selected.indexOf(type) > -1 ? 'blue' : 'lightgray'}}
                            >
                                <CardItem
                                    button
                                    onPress={() => {
                                        const i = this.state.selected.indexOf(type);
                                        i > -1 ?
                                            // this.setState({ selected: [] }) :
                                            () => {
                                                const tmp = [];
                                                this.state.selected.map((type2) => {
                                                    if (type !== type2) {
                                                        tmp.push(type);
                                                    }
                                                });
                                                this.setState({ selected: tmp });
                                            } :
                                            this.setState({ selected: [...this.state.selected, type]})
                                    }}
                                >
                                    <Text>{ type }</Text>
                                </CardItem>
                            </Card>
                        );
                    })}
                    <Text>{JSON.stringify(this.state)}</Text>
                    <Form>
                        <Text>Other Information</Text>
                        <Item>
                            <Input
                                value={this.state.other}
                                onChangeText={(val) => this.setState({ other: val})}
                            />
                        </Item>
                    </Form>
                </Content>
                <Footer>
                    <Button
                        style={{width: '100%'}}
                        full
                        disabled={this.state.selected.length === 0 && this.state.other.length === 0}
                        onPress={() => postAppointment(this.state.selected, this.state.other)}
                    >
                        <Text>Request Appointment</Text>
                    </Button>
                </Footer>
            </Container>
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
