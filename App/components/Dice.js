import React, { useState, useEffect } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
const cat = require('../../assets/Cat-14.png');
const empty = require('../../assets/empty.png');
import colors from '../constants/colors';

const Dice = ({ icon, isLocked, setDie }) => {
    const lockDie = () => {
        setDie(prevState => ({
            ...prevState,
            isLocked: isLocked ? false : true
        }))
    }

    const [diceRow1, setDiceRow1] = useState([]);
    const [diceRow2, setDiceRow2] = useState([]);
    const [diceRow3, setDiceRow3] = useState([]);

    const renderDice = () => {
        if (icon === 'dice-d6') {
            setDiceRow1([empty, empty, empty]);
            setDiceRow2([empty, empty, empty]);
            setDiceRow3([empty, empty, empty]);
        } else if (icon === 'dice-one') {
            setDiceRow1([empty, empty, empty]);
            setDiceRow2([empty, cat, empty]);
            setDiceRow3([empty, empty, empty]);
        } else if (icon === 'dice-two') {
            setDiceRow1([cat, empty, empty]);
            setDiceRow2([empty, empty, empty]);
            setDiceRow3([empty, empty, cat]);
        } else if (icon === 'dice-three') {
            setDiceRow1([cat, empty, empty]);
            setDiceRow2([empty, cat, empty]);
            setDiceRow3([empty, empty, cat]);
        } else if (icon === 'dice-four') {
            setDiceRow1([cat, empty, cat]);
            setDiceRow2([empty, empty, empty]);
            setDiceRow3([cat, empty, cat]);
        } else if (icon === 'dice-five') {
            setDiceRow1([cat, empty, cat]);
            setDiceRow2([empty, cat, empty]);
            setDiceRow3([cat, empty, cat]);
        } else if (icon === 'dice-six') {
            setDiceRow1([cat, empty, cat]);
            setDiceRow2([cat, empty, cat]);
            setDiceRow3([cat, empty, cat]);
        }
    }

    useEffect(() => {
        renderDice();
    }, [icon]);

    return (
        <TouchableOpacity onPress={lockDie}>
            <View style={[styles.diceContainer, isLocked ? styles.locked : null]}>
                <View style={styles.diceRow}>
                    {
                        diceRow1.map((point, idx) => (
                            <Image
                                source={point}
                                key={idx}
                                style={[styles.image, point === cat ? styles.highlightImg : null]}
                            />
                        ))
                    }
                </View>
                <View style={styles.diceRow}>
                    {
                        diceRow2.map((point, idx) => (
                            <Image
                                source={point}
                                key={idx}
                                style={[styles.image, point === cat ? styles.highlightImg : null]}
                            />
                        ))
                    }
                </View>
                <View style={styles.diceRow}>
                    {
                        diceRow3.map((point, idx) => (
                            <Image
                                source={point}
                                key={idx}
                                style={[styles.image, point === cat ? styles.highlightImg : null]}
                            />
                        ))
                    }
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = EStyleSheet.create({
    diceContainer: {
        backgroundColor: colors.dice,
        marginHorizontal: '.3rem',
        borderRadius: '.8rem',
        padding: '.2rem'
    },

    diceRow: {
        flexDirection: 'row'
    },

    locked: {
        backgroundColor: colors.lockedDice,
    },

    highlightImg: {
        backgroundColor: colors.button,
    }, 

    image: {
        width: '1.3rem',
        height: '1.3rem',
        margin: '.1rem',
        borderRadius: '1rem'
    }
})
 
export default Dice;