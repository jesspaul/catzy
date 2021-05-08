import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const Dice = ({ value, isLocked, setDie }) => {
    const lockDie = () => {
        setDie(prevState => ({
            ...prevState,
            isLocked: isLocked ? false : true
        }))
    }

    return (
        <TouchableOpacity onPress={lockDie}>
            <FontAwesome5 style={isLocked ? styles.locked : styles.unLocked} name={value} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    locked: {
        color: 'red',
        fontSize: 60,
        marginHorizontal: 8
    },

    unLocked: {
        color: 'white',
        fontSize: 60,
        marginHorizontal: 8
    }
})
 
export default Dice;