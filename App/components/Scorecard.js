import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Scorecard = ({ upperScores, lowerScores }) => {
    const lockScore = (scoreObj) => {
        if (!scoreObj.isLocked) {
            scoreObj.setter(prevState => ({
                ...prevState,
                isLocked: scoreObj.isLocked ? false : true
            }));
        }
    };

    let lockedUpper = upperScores.filter(scoreObj => scoreObj.score.isLocked);
    let lockedLower = lowerScores.filter(scoreObj => scoreObj.score.isLocked);

    let upperTotal = lockedUpper.reduce((total, current) => {
        return total + current.score.score;
    }, 0);

    let lowerTotal = lockedLower.reduce((total, current) => {
        return total + current.score.score;
    }, 0);

    return (
        <View style={styles.container}>
            <Text style={styles.title} onPress={() => console.log(lockedUpper)}>Scorecard!</Text>
            <View style={styles.section}>
                {upperScores.map((scoreObj, idx) => (
                    <Text
                        style={scoreObj.score.isLocked ? styles.locked : styles.unLocked}
                        onPress={() => lockScore(scoreObj)}
                        key={idx}
                    >
                        {scoreObj.score.category}: {scoreObj.score.score}
                    </Text>
                ))}
                <Text>Upper Section Total: {upperTotal}</Text>
            </View>
            <View style={styles.section}>
                {lowerScores.map((scoreObj, idx) => (
                    <Text
                        style={scoreObj.score.isLocked ? styles.locked : styles.unLocked}
                        onPress={() => lockScore(scoreObj)}
                        key={idx}
                    >
                        {scoreObj.score.category}: {scoreObj.score.score}
                    </Text>
                ))}
                <Text>Lower Section Total: {lowerTotal}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    column: {
        marginHorizontal: 20
    },
    
    container: {
        justifyContent: 'center',
        backgroundColor: 'pink'
    },

    locked: {
        color: 'red',
        fontSize: 20
    },

    unLocked: {
        color: 'white',
        fontSize: 20
    },

    title: {
        fontSize: 25,
        textAlign: 'center'
    },

    section: {
        marginVertical: 5,
    }
});
 
export default Scorecard;