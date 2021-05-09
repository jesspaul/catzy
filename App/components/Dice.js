import React from 'react';
import { TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { FontAwesome5 } from '@expo/vector-icons';
import colors from '../constants/colors';

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

const styles = EStyleSheet.create({
    locked: {
        color: colors.lockedDice,
        fontSize: '4rem',
        marginHorizontal: '.6rem',
    },

    unLocked: {
        color: colors.dice,
        fontSize: '4rem',
        marginHorizontal: '.6rem'
    }
})
 
export default Dice;