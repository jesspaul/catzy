import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Dice = ({ value }) => {
    return (
        <TouchableOpacity style={styles.dice}>
            <Text>{value}</Text>
        </TouchableOpacity>
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