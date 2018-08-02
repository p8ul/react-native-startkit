import React from 'react';
import { Provider } from 'react-redux';
import { YellowBox } from 'react-native';
import store from './src/store';
import Navigation from './src/navigation';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);


export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Navigation />
            </Provider>
        );
    }
}
