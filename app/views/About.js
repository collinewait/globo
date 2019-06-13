import React from 'react';
import {
    StyleSheet,
    Text,
    ScrollView,
    Image
} from 'react-native';

const aboutGlobal = `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less`;

const whatGlobal = `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less`;

export class About extends React.Component {
    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <Image style={styles.pics} source={require('../sections/img/arch640.jpg')} />
                <Text style={styles.aboutTitle}>Who we are</Text>
                <Text style={styles.aboutText}>{aboutGlobal}</Text>

                <Image style={styles.pics} source={require('../sections/img/computer640.jpg')} />
                <Text style={styles.aboutTitle}>What we do</Text>
                <Text style={styles.aboutText}>{whatGlobal}</Text>
                <Text onPress={() => this.props.navigation.goBack()} style={styles.backButton}>GO BACK</Text>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingBottom: 30,
        backgroundColor: '#ffffff'
    },
    pic: {
        height: 300
    },
    aboutTitle: {
        paddingTop: 10,
        textAlign: 'center'
    },
    aboutText: {
        paddingBottom: 20
    },
    backButton: {
        paddingBottom: 50,
        textAlign: 'center'
    }
});