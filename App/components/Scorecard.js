import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

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
            {/* <Text style={styles.title}>Score</Text> */}
            <View style={styles.container}>
                <View style={styles.section}>
                    {upperScores.map((scoreObj, idx) => (
                        <Text
                            style={scoreObj.score.isLocked || round.selection?.score.category === scoreObj.score.category ? styles.locked : styles.unLocked}
                            onPress={() => toggleSelection(scoreObj)}
                            key={idx}
                        >
                            {scoreObj.score.category}: {scoreObj.score.score}
                        </Text>
                    ))}
                    <Text style={styles.total}>Upper Bonus: {upperBonus}</Text>
                    <Text style={styles.total}>Upper Total: {upperTotal}</Text>
                </View>
                <View style={styles.section}>
                    {lowerScores.map((scoreObj, idx) => (
                        <Text
                            style={scoreObj.score.isLocked || round.selection?.score.category === scoreObj.score.category ? styles.locked : styles.unLocked}
                            onPress={() => toggleSelection(scoreObj)}
                            key={idx}
                        >
                            {scoreObj.score.category}: {scoreObj.score.score}
                        </Text>
                    ))}
                    <Text style={styles.total}>Lower Total: {lowerTotal}</Text>
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
        backgroundColor: 'lightgray',
        marginHorizontal: 10,
        width: 180,
        fontSize: 20,
        padding: 5,
    },

    unLocked: {
        fontSize: 20,
        marginHorizontal: 10,
        padding: 5,
        width: 180
    },

    title: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    section: {
        marginHorizontal: 5,
        marginVertical: 5,
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        height: 150,
        width: 400
    },

    total: {
        fontSize: 20,
        marginHorizontal: 10,
        padding: 5,
        width: 180
    },
});
 
export default Scorecard;