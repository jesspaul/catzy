import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import colors from '../constants/colors';

const Scorecard = ({ upperScores, lowerScores, setRound, upperTotal, lowerTotal, upperBonus, round, roll }) => {
    const toggleSelection = (scoreObj) => {
        if (!scoreObj.score.isLocked && roll !== 0) {
            setRound(prevState => ({
                ...prevState,
                selection: prevState.selection === null ? scoreObj : null
            }));
        }
    }

    return (
        <View>
            <View style={styles.container}>
            <Text style={styles.title}>Score</Text>
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

const styles = EStyleSheet.create({
    container: {
        justifyContent: 'center',
        backgroundColor: colors.scoreBg,
        borderTopLeftRadius: '.8rem',
        borderBottomLeftRadius: '.8rem'
    },

    locked: {
        backgroundColor: colors.highlight,
        width: '9rem',
        paddingHorizontal: '.3rem',
        paddingVertical: '.1rem',
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderRadius: '.8rem'
    },

    textContainer: {
        paddingHorizontal: '.3rem',
        paddingVertical: '.1rem',
        width: '9rem',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },

    title: {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '.3rem',
        color: colors.text
    },

    section: {
        marginHorizontal: '.3rem',
        flexWrap: 'wrap',
        height: '6rem',
        marginBottom: '.5rem'
    },
    
    score: {
        fontSize: '1rem',
        color: colors.text
    }
});
 
export default Scorecard;