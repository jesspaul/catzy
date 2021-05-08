import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const Dice = ({ icon, isLocked, setDie }) => {
    const lockDie = () => {
        setDie(prevState => ({
            ...prevState,
            isLocked: isLocked ? false : true
        }))
    }

    return (
        <TouchableOpacity onPress={lockDie}>
            <FontAwesome5 style={isLocked ? styles.locked : styles.unLocked} name={icon} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    locked: {
        color: 'darkblue',
        fontSize: 60,
        marginHorizontal: 10,
    },

    unLocked: {
        color: 'lightblue',
        fontSize: 60,
        marginHorizontal: 10
    }
})
 
export default Dice;