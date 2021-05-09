import React from 'react';
import { Text, ScrollView, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../constants/colors';

export default () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.content}>
                <Text style={styles.heading}>How to Play</Text>
                <Text style={styles.text}>Player rolls five dice. After each roll, the player can choose to save or reroll any of the dice up to two times per turn.</Text>
                <Text style={styles.text}>After three rolls, the player must select a score category to save. The game ends after 13 rounds when all scores have been used.</Text>

                <Text style={styles.heading}>Scoring</Text>
                <View style={styles.section}>
                    <Text style={[styles.category, styles.text, {textDecorationLine: 'underline'}]}>Upper Section:</Text>
                    <View style={styles.line}>
                        <Text style={styles.text}>
                            <Text style={styles.category}>Ones: </Text>
                            The sum of all dice showing the number 1.
                        </Text>
                    </View>
                    <View style={styles.line}>
                        <Text style={styles.text}>
                            <Text style={styles.category}>Twos: </Text>
                            The sum of all dice showing the number 2.
                        </Text>
                    </View>
                    <View style={styles.line}>
                        <Text style={styles.text}>
                            <Text style={styles.category}>Threes: </Text>
                            The sum of all dice showing the number 3.
                        </Text>
                    </View>
                    <View style={styles.line}>
                        <Text style={styles.text}>
                            <Text style={styles.category}>Fours: </Text>
                            The sum of all dice showing the number 4.
                        </Text>
                    </View>
                    <View style={styles.line}>
                        <Text style={styles.text}>
                            <Text style={styles.category}>Fives: </Text>
                            The sum of all dice showing the number 5.
                        </Text>
                    </View>
                    <View style={styles.line}>
                        <Text style={styles.text}>
                            <Text style={styles.category}>Sixes: </Text>
                            The sum of all dice showing the number 6.
                        </Text>
                    </View>
                    <View style={styles.line}>
                        <Text style={styles.text}>
                            <Text style={styles.category}>Bonus: </Text>
                            If the player scores at least 63 points in the upper section, they are awarded a bonus of 50 points.
                        </Text>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={[styles.category, styles.text, {textDecorationLine: 'underline'}]}>Lower Section:</Text>
                    <View style={styles.line}>
                        <Text style={styles.text}>
                            <Text style={styles.category}>Three of a Kind: </Text>
                            Three dice showing the same number. Score: Sum of those three dice.
                        </Text>
                    </View>
                    <View style={styles.line}>
                        <Text style={styles.text}>
                            <Text style={styles.category}>Four of a Kind: </Text>
                            Four dice with the same number. Score: Sum of those four dice.
                        </Text>
                    </View>
                    <View style={styles.line}>
                        <Text style={styles.text}>
                            <Text style={styles.category}>Small Straight: </Text>
                            Four dice with consecutive numbers. Score: 30 points.
                        </Text>
                    </View>
                    <View style={styles.line}>
                        <Text style={styles.text}>
                            <Text style={styles.category}>Large Straight: </Text>
                            Five dice with consecutive numbers. Score: 40 points.
                        </Text>
                    </View>
                    <View style={styles.line}>
                        <Text style={styles.text}>
                            <Text style={styles.category}>Full House: </Text>
                            Any set of three combined with a different pair. Score: Sum of all the dice.
                        </Text>
                    </View>
                    <View style={styles.line}>
                        <Text style={styles.text}>
                            <Text style={styles.category}>Chance: </Text>
                            Any combination of dice. Score: Sum of all the dice.
                        </Text>
                    </View>
                    <View style={styles.line}>
                        <Text style={styles.text}>
                            <Text style={styles.category}>Yatzy: </Text>
                            All five dice with the same number. Score: 50 points.
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.diceBg
    },

    content: {
        width: '70%'
    },

    heading: {
        fontWeight: 'bold',
        fontSize: '1.5rem',
        marginTop: '1rem',
        color: colors.text
    },

    category: {
        fontWeight: 'bold',
        marginRight: '.25rem'
    },

    text: {
        color: colors.text,
        fontSize: '1rem',
        flexWrap: 'wrap',
    },
    
    line: {
        flexDirection: 'row',
    },

    section: {
        marginBottom: '1rem'
    }
})