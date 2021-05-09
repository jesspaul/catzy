import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../constants/colors';

const Scorecard = ({ upperScores, lowerScores, setRound, upperTotal, lowerTotal, upperBonus, round }) => {
    const toggleSelection = (scoreObj) => {
        if (!scoreObj.score.isLocked) {
            setRound(prevState => ({
                ...prevState,
                selection: prevState.selection === null ? scoreObj : null
            }));
        }
    }

    return (
        <View>
            <Text style={styles.title}>Score</Text>
            <View style={styles.container}>
                <View style={styles.section}>
                    {upperScores.map((scoreObj, idx) => (
                        <TouchableOpacity
                            style={scoreObj.score.isLocked || round.selection?.score.category === scoreObj.score.category ? styles.locked : styles.textContainer}
                            onPress={() => toggleSelection(scoreObj)}
                            key={idx}
                        >
                            <Text
                                style={styles.score}
                            >
                                {scoreObj.score.category}: 
                            </Text>
                            <Text
                                style={styles.score}
                            >
                                {scoreObj.score.score}
                            </Text>
                        </TouchableOpacity>
                    ))}
                    <View style={styles.textContainer}>
                        <Text style={styles.score}>Upper Bonus: </Text>
                        <Text style={styles.score}>{upperBonus}</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={[styles.score, {fontWeight: 'bold'}]}>Upper Total: </Text>
                        <Text style={[styles.score, {fontWeight: 'bold'}]}>{upperTotal}</Text>
                    </View>
                </View>
                <View style={styles.section}>
                    {lowerScores.map((scoreObj, idx) => (
                        <TouchableOpacity
                            style={scoreObj.score.isLocked || round.selection?.score.category === scoreObj.score.category ? styles.locked : styles.textContainer}
                            onPress={() => toggleSelection(scoreObj)}
                            key={idx}
                        >
                            <Text
                                onPress={() => toggleSelection(scoreObj)}
                                style={styles.score}
                            >
                                {scoreObj.score.category}: 
                            </Text>
                            <Text
                                onPress={() => toggleSelection(scoreObj)}
                                style={styles.score}
                            >
                                {scoreObj.score.score}
                            </Text>
                        </TouchableOpacity>
                    ))}
                    <View style={styles.textContainer}>
                        <Text style={[styles.score, {fontWeight: 'bold'}]}>Lower Total: </Text>
                        <Text style={[styles.score, {fontWeight: 'bold'}]}>{lowerTotal}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center'
    },

    locked: {
        backgroundColor: colors.highlight,
        width: 160,
        fontSize: 18,
        paddingHorizontal: 5,
        paddingVertical: 5,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },

    textContainer: {
        fontSize: 18,
        paddingHorizontal: 5,
        paddingVertical: 5,
        width: 160,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },

    title: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.headers
    },

    section: {
        marginHorizontal: 5,
        marginVertical: 3,
        flexWrap: 'wrap',
        height: 140
    },
    
    score: {
        fontSize: 18,
        color: colors.text
    }
});
 
export default Scorecard;