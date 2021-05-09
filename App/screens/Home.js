import React from 'react';
import { Text, View, TouchableOpacity, Pressable } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { FontAwesome5 } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../constants/colors';

export default ({ navigation }) => {
    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.header}>
                <TouchableOpacity onPress={() => navigation.push('Instructions')}>
                    <FontAwesome5 name='bars' size={32} color={colors.text} />
                </TouchableOpacity>
            </SafeAreaView>
            <Text>THis is the Home Screen</Text>
            <Pressable style={styles.button} onPress={() => navigation.push('Game')}>
                <Text style={styles.buttonText}>New Game</Text>
            </Pressable>
        </View>
    )
}

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    
    header: {
        position: 'absolute',
        alignItems: 'flex-end',
        top: 0,
        right: 0,
        paddingTop: '1rem'
    },

    button: {
        backgroundColor: colors.button,
        borderRadius: '.8rem',
    },

    buttonText: {
        color: colors.buttonText,
        fontSize: '1.5rem',
        paddingHorizontal: '.6rem'
    },
})