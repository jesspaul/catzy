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
    
  const [oneScore, setOneScore] = useState(0);
  const [twoScore, setTwoScore] = useState(0);
  const [threeScore, setThreeScore] = useState(0);
  const [fourScore, setFourScore] = useState(0);
  const [fiveScore, setFiveScore] = useState(0);
  const [sixScore, setSixScore] = useState(0);

  let upperScores = [{
    category: 'Ones',
    score: oneScore,
    setter: setOneScore,
    isLocked: false
  }, {
    category: 'Twos',
    score: twoScore,
    setter: setTwoScore,
    isLocked: false
  }, {
    category: 'Threes',
    score: threeScore,
    setter: setThreeScore,
    isLocked: false
  }, {
    category: 'Fours',
    score: fourScore,
    setter: setFourScore,
    isLocked: false
  }, {
    category: 'Fives',
    score: fiveScore,
    setter: setFiveScore,
    isLocked: false
  }, {
    category: 'Sixes',
    score: sixScore,
    setter: setSixScore,
    isLocked: false
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
          setOneScore(ones);
      } else if (die === 2) {
          twos += 2;
          setTwoScore(twos);
      } else if (die === 3) {
          threes += 3;
          setThreeScore(threes);
      } else if (die === 4) {
          fours += 4;
          setFourScore(fours);
      } else if (die === 5) {
          fives += 5;
          setFiveScore(fives);
      } else if (die === 6) {
          sixes += 6;
          setSixScore(sixes);
      }
    });
  };

  const [threeKind, setThreeKind] = useState(0);
  const [fourKind, setFourKind] = useState(0);
  const [fullHouse, setFullHouse] = useState(0);
  const [smallStraight, setSmallStraight] = useState(0);
  const [largeStraight, setLargeStraight] = useState(0);
  const [yahtzeeScore, setYahtzeeScore] = useState(0);

  let lowerScores = [{
    category: 'Three of a Kind',
    score: threeKind,
    isLocked: false
  }, {
    category: 'Four of a Kind',
    score: fourKind,
    isLocked: false
  }, {
    category: 'Full House',
    score: fullHouse,
    isLocked: false
  }, {
    category: 'Small Straight',
    score: smallStraight,
    isLocked: false
  }, {
    category: 'Large Straight',
    score: largeStraight,
    isLocked: false
  }, {
    category: 'Yahtzee',
    score: yahtzeeScore,
    isLocked: false
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
    setOneScore(0);
    setTwoScore(0);
    setThreeScore(0);
    setFourScore(0);
    setFiveScore(0);
    setSixScore(0);
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
