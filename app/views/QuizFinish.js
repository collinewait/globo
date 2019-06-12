import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native';

export class Finish extends React.Component {
    static navigationOptions = {
        header: null
    }

    exitQuiz = () => {
        this.props.navigation.navigate('HomeRT');
    }

    render() {
        const { getParam } = this.props.navigation;
        let userScore = getParam('score', 'Error - No score returned');
        let questionsMissed = getParam('missed', 'Error - No missed questions');
        let totalQuestions = getParam('questions', 'Error - No questions returned');

        return(
            <View style={styles.container}>
                <Text>Your quiz score was {userScore}</Text>
                <Text>You missed on {questionsMissed} out of {totalQuestions} questions</Text>

                <TouchableHighlight onPress={this.exitQuiz} style={styles.button}>
                    <Text>FinishQuiz</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '10%'
    }
});