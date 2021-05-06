import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Dice = ({ value, isLocked, setDie }) => {
    const lockDie = () => {
        setDie(prevState => ({
            ...prevState,
            isLocked: isLocked ? false : true
        }))
    }

    return (
        <TouchableOpacity style={styles.dice} onPress={lockDie}>
            <Text style={isLocked ? styles.locked : styles.unLocked}>{value}</Text>
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
    },
    
    locked: {
        color: 'red',
        fontSize: 20
    },

    unLocked: {
        color: 'white',
        fontSize: 20
    }
})
 
export default Dice;