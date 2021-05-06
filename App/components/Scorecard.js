import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Scorecard = ({ upperScores, findUpperScore, lowerScores }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title} onPress={findUpperScore}>Scorecard!</Text>
            <View style={styles.section}>
                {upperScores.map((scoreObj, idx) => (
                    <Text key={idx}>{scoreObj.category}: {scoreObj.score}</Text>
                ))}
            </View>
            <View style={styles.section}>
                {lowerScores.map((scoreObj, idx) => (
                    <Text key={idx}>{scoreObj.category}: {scoreObj.score}</Text>
                ))}
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