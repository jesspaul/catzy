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
        let randomNum = Math.floor(Math.random()*6) + 1;
        dieObj.setDieVar(prevState => ({
          ...prevState,
          value: randomNum
        }));
      }
    });
    setRoll(roll + 1);
  };

  let diceVals = dice.map(die => die.dieVar.value);
  
  const oneOriginal = {category: 'Ones', score: 0, isLocked: false};
  const twoOriginal = {category: 'Twos', score: 0, isLocked: false};
  const threeOriginal = {category: 'Threes', score: 0, isLocked: false};
  const fourOriginal = {category: 'Fours', score: 0, isLocked: false};
  const fiveOriginal = {category: 'Fives', score: 0, isLocked: false};
  const sixOriginal = {category: 'Sixes', score: 0, isLocked: false};

  const [oneScore, setOneScore] = useState(oneOriginal);
  const [twoScore, setTwoScore] = useState(twoOriginal);
  const [threeScore, setThreeScore] = useState(threeOriginal);
  const [fourScore, setFourScore] = useState(fourOriginal);
  const [fiveScore, setFiveScore] = useState(fiveOriginal);
  const [sixScore, setSixScore] = useState(sixOriginal);

  let upperScores = [{
    score: oneScore,
    setter: setOneScore
  }, {
    score: twoScore,
    setter: setTwoScore,
  }, {
    score: threeScore,
    setter: setThreeScore,
  }, {
    score: fourScore,
    setter: setFourScore,
  }, {
    score: fiveScore,
    setter: setFiveScore,
  }, {
    score: sixScore,
    setter: setSixScore,
  }];

  let ones = 0;
  let twos = 0;
  let threes = 0;
  let fours = 0;
  let fives = 0;
  let sixes = 0;

  const findUpperScore = () => {
    diceVals.forEach(die => {
      if (die === 1) {
          ones += 1;
          setOneScore(prevState => ({
            ...prevState,
            score: ones
          }));
      } else if (die === 2) {
          twos += 2;
          setTwoScore(prevState => ({
            ...prevState,
            score: twos
          }));
      } else if (die === 3) {
          threes += 3;
          setThreeScore(prevState => ({
            ...prevState,
            score: threes
          }));
      } else if (die === 4) {
          fours += 4;
          setFourScore(prevState => ({
            ...prevState,
            score: fours
          }));
      } else if (die === 5) {
          fives += 5;
          setFiveScore(prevState => ({
            ...prevState,
            score: fives
          }));
      } else if (die === 6) {
          sixes += 6;
          setSixScore(prevState => ({
            ...prevState,
            score: sixes
          }));
      }
    });
  };

  const [threeKind, setThreeKind] = useState({category: 'Three of a Kind', score: 0, isLocked: false});
  const [fourKind, setFourKind] = useState({category: 'Four of a Kind', score: 0, isLocked: false});
  const [fullHouse, setFullHouse] = useState({category: 'Full House', score: 0, isLocked: false});
  const [smallStraight, setSmallStraight] = useState({category: 'Small Straight', score: 0, isLocked: false});
  const [largeStraight, setLargeStraight] = useState({category: 'Large Straight', score: 0, isLocked: false});
  const [yahtzeeScore, setYahtzeeScore] = useState({category: 'Yahtzee', score: 0, isLocked: false});

  let lowerScores = [{
    score: threeKind,
    setter: setThreeKind
  }, {
    score: fourKind,
    setter: setFourKind
  }, {
    score: fullHouse,
    setter: setFullHouse
  }, {
    score: smallStraight,
    setter: setSmallStraight
  }, {
    score: largeStraight,
    setter: setLargeStraight
  }, {
    score: yahtzeeScore,
    setter: setYahtzeeScore
  }];

  const findLowerScore = () => {
    diceVals.forEach(die => {
      console.log(die);
    })
  };

  const resetGame = () => {
    dice.forEach(dieObj => {
      dieObj.setDieVar({
        value: dieOriginalState,
        isLocked: false
      });
    });
    setRoll(0);
    setOneScore(oneOriginal);
    setTwoScore(twoOriginal);
    setThreeScore(threeOriginal);
    setFourScore(fourOriginal);
    setFiveScore(fiveOriginal);
    setSixScore(sixOriginal);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Yahtzee!</Text>
      <View style={styles.gameboard}>
        <Scorecard upperScores={upperScores} findUpperScore={findUpperScore} lowerScores={lowerScores}/>

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
    backgroundColor: 'wheat',
    justifyContent: 'center'
  },

  header: {
    fontSize: 40
  },

  gameboard: {
    flexDirection: 'row'
  }
});
