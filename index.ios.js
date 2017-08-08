/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, TextInput, View} from 'react-native';

export default class sixpence extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>$1,000</Text>
                <TextInput style={{backgroundColor: "red", height: 40, width: 100,borderColor: "grey", borderWidth: 1}}/>
                {/*<TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}}/>*/}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 40,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('sixpence', () => sixpence);
