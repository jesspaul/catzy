import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Scorecard = ({ upperScores, lowerScores, findUpperScore, findThreeKindScore }) => {
    const lockScore = (scoreObj) => {
        if (!scoreObj.isLocked) {
            scoreObj.setter(prevState => ({
                ...prevState,
                isLocked: scoreObj.isLocked ? false : true
            }));
        }
    };

    let upperTotal = upperScores.reduce((total, current) => {
        return total + current.score.score;
    }, 0);

    let lowerTotal = lowerScores.reduce((total, current) => {
        return total + current.score.score;
    }, 0);

    const findAllScores = () => {
        findUpperScore();
        findThreeKindScore();
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title} onPress={findAllScores}>Scorecard!</Text>
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
    },

    unLocked: {
        color: 'white'
    },

    title: {
        fontSize: 20,
        textAlign: 'center'
    },

    section: {
        marginVertical: 5,
    }
});
 
export default Scorecard;