import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Dice from './App/components/Dice';
import Scorecard from './App/components/Scorecard';

export default function App() {
  const dieOriginalState = 'Dice';
  const [die0, setDie0] = useState({
    value: dieOriginalState,
    isLocked: false
  });
  const [die1, setDie1] = useState({
    value: dieOriginalState,
    isLocked: false
  });
  const [die2, setDie2] = useState({
    value: dieOriginalState,
    isLocked: false
  });
  const [die3, setDie3] = useState({
    value: dieOriginalState,
    isLocked: false
  });
  const [die4, setDie4] = useState({
    value: dieOriginalState,
    isLocked: false
  });

  let dice = [{dieVar: die0, setDieVar: setDie0}, {dieVar: die1, setDieVar: setDie1}, {dieVar: die2, setDieVar: setDie2}, {dieVar: die3, setDieVar: setDie3}, {dieVar: die4, setDieVar: setDie4}];

  const [roll, setRoll] = useState(0);
  
  const rollDice = () => {
    dice.forEach(dieObj => {
      if (!dieObj.dieVar.isLocked) {
        let randomNum = Math.floor(Math.random()*6);
        dieObj.setDieVar(prevState => ({
          ...prevState,
          value: randomNum
        }));
      }
    });
    setRoll(roll + 1);
  }

  const resetGame = () => {
    dice.forEach(dieObj => {
      dieObj.setDieVar({
        value: dieOriginalState,
        isLocked: false
      });
    });
    setRoll(0);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Yahtzee!</Text>
      <View style={styles.gameboard}>
        <Scorecard />

        <View style={styles.diceSection}>
          <Text>Roll: {roll}</Text>
          <View style={styles.diceContainer}>
            { dice.map((dieObj, idx) => (
              <Dice key={idx} value={dieObj.dieVar.value} isLocked={dieObj.dieVar.isLocked} setDie={dieObj.setDieVar} />
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
      </View>
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

  diceSection: {
    alignItems: 'center',
    backgroundColor: 'wheat'
  },

  header: {
    fontSize: 40
  },

  gameboard: {
    flexDirection: 'row'
  }
});
