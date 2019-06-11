import React from 'react';
import { Text, View, FlatList, Image, TouchableWithoutFeedback } from 'react-native';

export class Video extends React.Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = { listLoaded: false };
    }

    componentDidMount() {
        return fetch('https://www.googleapis.com/youtube/v3/search?part=snipet&q=pluralsight&type=video&key=AIzaSyCInWUEfj4kgSRHNAYEIohW-7gobjdn9Z4')
        .then(response => response.json())
        .then(responseJson => {
            this.setState({
                listLoaded: true,
                videoList: Array.from(responseJson.items)
            })
        })
        .catch(error => console.error(error));
    }
}