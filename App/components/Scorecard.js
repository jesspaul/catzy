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
        <View>
        <Text style={styles.title} onPress={() => console.log(lockedUpper)}>Scorecard!</Text>
        <View style={styles.container}>
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
                <Text style={styles.total}>Upper Bonus: {}</Text>
                <Text style={styles.total}>Upper Total: {upperTotal}</Text>
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
                <Text style={styles.total}>Lower Total: {lowerTotal}</Text>
            </View>
        </View>
                <Text style={styles.total}>Game Total: {}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        backgroundColor: 'pink',
        flexDirection: 'row'
    },

    locked: {
        color: 'red',
        fontSize: 20,
        marginHorizontal: 10
    },

    unLocked: {
        fontSize: 20,
        marginHorizontal: 10
    },

    title: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center'
    },

    section: {
        marginHorizontal: 5,
    },

    total: {
        fontSize: 20,
        marginHorizontal: 5,
    },
});
 
export default Scorecard;