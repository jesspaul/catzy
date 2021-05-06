import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Scorecard = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Scorecard!</Text>
            <View style={styles.section}>
                <View style={styles.column}>
                    <Text>Ones</Text>
                    <Text>Twos</Text>
                    <Text>Threes</Text>
                    <Text>Bonus</Text>
                </View>
                <View style={styles.column}>
                    <Text>Fours</Text>
                    <Text>Fives</Text>
                    <Text>Sixes</Text>
                    <Text>Upper Total</Text>
                </View>
            </View>

            <View style={styles.section}>
                <View style={styles.column}>
                    <Text>3 of a Kind</Text>
                    <Text>4 of a Kind</Text>
                    <Text>Full House</Text>
                    <Text>Lower Total</Text>
                </View>
                <View style={styles.column}>
                    <Text>Small Straight</Text>
                    <Text>Large Straight</Text>
                    <Text>Yahtzee</Text>
                    <Text>Game Total</Text>
                </View>
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
        flexDirection: 'row'
    }
});
 
export default Scorecard;