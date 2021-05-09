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
                    <FontAwesome5 name='paw' size={32} color={colors.text} />
                </TouchableOpacity>
            </SafeAreaView>
            <Text style={styles.title}>Catzy</Text>
            <Text style={styles.subtitle}>It's Yatzy with cats!</Text>
            <Pressable style={styles.button} onPress={() => navigation.push('Game')}>
                <Text style={styles.buttonText}>New Game</Text>
            </Pressable>
            <View style={styles.cat}>
                <View style={styles.catSection}>
                    <FontAwesome5 name='cat' size={60} style={{paddingHorizontal: 3}} color={colors.button} />
                    <FontAwesome5 name='cat' size={60} style={{paddingHorizontal: 3}} color={colors.highlight} />
                    <FontAwesome5 name='cat' size={60} style={{paddingHorizontal: 3}} color={colors.dice} />
                </View>
                <View style={styles.catSection}>
                    <FontAwesome5 name='cat' size={60} style={{paddingHorizontal: 3}} color={colors.dice} />
                    <FontAwesome5 name='cat' size={60} style={{paddingHorizontal: 3}} color={colors.highlight} />
                    <FontAwesome5 name='cat' size={60} style={{paddingHorizontal: 3}} color={colors.button} />
                </View>
            </View>
        </View>
    )
}

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background
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

    title: {
        fontSize: '3rem',
        fontWeight: 'bold',
        color: colors.text
    },
    
    subtitle: {
        color: colors.text,
        fontSize: '1.5rem',
        marginBottom: '1.5rem'
    },

    cat: {
        flexDirection: 'row',
        width: '$screenWidth * .7',
        justifyContent: 'space-between'
    },

    catSection: {
        flexDirection: 'row',
    }
})