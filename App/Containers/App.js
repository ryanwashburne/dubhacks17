// React
import React, { Component } from 'react';
import '../Config';

// Redux
import { Provider } from 'react-redux';
import createStore from '../Redux'
import ReduxNavigation from '../Navigation/ReduxNavigation';

// create our store
const store = createStore()

class App extends Component {
    render () {
        return (
            <Provider store={store}>
                <ReduxNavigation />
            </Provider>
      );
    }
}

export default App;
