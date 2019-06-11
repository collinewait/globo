import React from 'react';
import { Stylesheet, Text, View } from 'react-native';
import { Header } from '../sections/Header';

export class Home extends React.Component {
    render(){
        return(
            <View>
                <Text>This is the Home Page</Text>
                <Text>Just some other lines</Text>
                <Text>To display some text</Text>
                <Header message='Press to login' />
            </View>
        );
    }
}