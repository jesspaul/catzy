import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Dice = ({ number }) => {
    return (
        <View style={styles.dice}>
            <Text>{number}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    dice: {
        width: 40,
        height: 40,
        backgroundColor: 'lightblue',
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
 
export default Dice;