import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from '../sections/Header';
import { Hero } from '../sections/Hero';

export class Home extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <Header message='Press to login' />
                <Hero />
                <Text style={{flex: 8}}>Just some other lines</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});