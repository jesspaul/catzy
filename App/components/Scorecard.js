import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Scorecard = ({ upperScores, findUpperScore, lowerScores }) => {

    let upperTotal = upperScores.reduce((total, current) => {
        return total + current.score;
    }, 0);

    let lowerTotal = lowerScores.reduce((total, current) => {
        return total + current.score;
    }, 0);

    return (
        <View style={styles.container}>
            <Text style={styles.title} onPress={findUpperScore}>Scorecard!</Text>
            <View style={styles.section}>
                {upperScores.map((scoreObj, idx) => (
                    <Text key={idx}>{scoreObj.category}: {scoreObj.score}</Text>
                ))}
                <Text>Upper Section Total: {upperTotal}</Text>
            </View>
            <View style={styles.section}>
                {lowerScores.map((scoreObj, idx) => (
                    <Text key={idx}>{scoreObj.category}: {scoreObj.score}</Text>
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

    title: {
        fontSize: 20,
        textAlign: 'center'
    },

    section: {
        marginVertical: 5,
    }
});
 
export default Scorecard;