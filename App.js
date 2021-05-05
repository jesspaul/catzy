import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Dice from './App/components/Dice';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Yahtzee!</Text>
      <Dice />
      <Dice />
      <Dice />
      <Dice />
      <Dice />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
