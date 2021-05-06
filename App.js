import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Dice from './App/components/Dice';

export default function App() {
  const diceOriginalState = ['Dice', 'Dice', 'Dice', 'Dice', 'Dice'];
  const [dice, setDice] = useState(diceOriginalState);
  const [roll, setRoll] = useState(0);
  
  const rollDice = () => {
    let random = dice.map(die => Math.floor(Math.random()*6));
    setDice(random);
    setRoll(roll + 1);
  }

  const resetGame = () => {
    setDice(diceOriginalState);
    setRoll(0);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Yahtzee!</Text>
      <Text>Roll: {roll}</Text>
      <View style={styles.diceContainer}>
        { dice.map((die, idx) => (
          <Dice key={idx} number={die} />
        ))}
      </View>
      { roll < 3 ? (
        <Button title='Roll!' onPress={rollDice} />
        ) : (
          <>
          <Text>Game Over</Text>
          <Button title='Play Again' onPress={resetGame} />
          </>
      )}
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

  diceContainer: {
    flexDirection: 'row',
    marginVertical: 20
  },

  header: {
    fontSize: 40
  }
});
