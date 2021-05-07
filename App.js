import React, { useState, useEffect } from 'react';
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
  const [round, setRound] = useState({
    number: 0,
    selection: null,
  });

  // when player selects a score, prompt to go to next round
  // after three rolls, player must select a score to go to next round
  // player cannot advance to next round without selecting a score
  // player can only select one score per round, but needs to save scores from previous rounds
  

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
      if (die === 1 && !oneScore.isLocked) {
          ones += 1;
          setOneScore(prevState => ({
            ...prevState,
            score: ones
          }));
      } else if (die === 2 && !twoScore.isLocked) {
          twos += 2;
          setTwoScore(prevState => ({
            ...prevState,
            score: twos
          }));
      } else if (die === 3 && !threeScore.isLocked) {
          threes += 3;
          setThreeScore(prevState => ({
            ...prevState,
            score: threes
          }));
      } else if (die === 4 && !fourScore.isLocked) {
          fours += 4;
          setFourScore(prevState => ({
            ...prevState,
            score: fours
          }));
      } else if (die === 5 && !fiveScore.isLocked) {
          fives += 5;
          setFiveScore(prevState => ({
            ...prevState,
            score: fives
          }));
      } else if (die === 6 && !sixScore.isLocked) {
          sixes += 6;
          setSixScore(prevState => ({
            ...prevState,
            score: sixes
          }));
      }
    });
  };

  const threeKindOriginal = {category: 'Three of a Kind', score: 0, isLocked: false};
  const fourKindOriginal = {category: 'Four of a Kind', score: 0, isLocked: false};
  const fullHouseOriginal = {category: 'Full House', score: 0, isLocked: false};
  const smallStraightOriginal = {category: 'Small Straight', score: 0, isLocked: false};
  const largeStraightOriginal = {category: 'Large Straight', score: 0, isLocked: false};
  const chanceScoreOriginal = {category: 'Chance', score: 0, isLocked: false};
  const yahtzeeScoreOriginal = {category: 'Yahtzee', score: 0, isLocked: false};

  const [threeKind, setThreeKind] = useState(threeKindOriginal);
  const [fourKind, setFourKind] = useState(fourKindOriginal);
  const [fullHouse, setFullHouse] = useState(fullHouseOriginal);
  const [smallStraight, setSmallStraight] = useState(smallStraightOriginal);
  const [largeStraight, setLargeStraight] = useState(largeStraightOriginal);
  const [chanceScore, setChanceScore] = useState(chanceScoreOriginal);
  const [yahtzeeScore, setYahtzeeScore] = useState(yahtzeeScoreOriginal);

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
    score: chanceScore,
    setter: setChanceScore
  }, {
    score: yahtzeeScore,
    setter: setYahtzeeScore
  }];

  const findOfKindScore = () => {
    const countValues = (value, array) => array.reduce((counter, currentVal) => {
      return value === currentVal ? counter + 1 : counter
    }, 0);

    let valueCount = [{value: 1, count: countValues(1, diceVals)}, {value: 2, count: countValues(2, diceVals)}, {value: 3, count: countValues(3, diceVals)}, {value: 4, count: countValues(4, diceVals)}, {value: 5, count: countValues(5, diceVals)}, {value: 6, count: countValues(6, diceVals)}];
    
    if (valueCount.some(obj => obj.count === 3) && valueCount.some(obj => obj.count === 2) && !fullHouse.isLocked) {
      let fullScore = 0;
      valueCount.forEach(obj => {
        if (obj.count === 3) {
          fullScore += 3 * obj.value;
        }
        if (obj.count === 2) {
          fullScore += 2 * obj.value;
        }
      })
      setFullHouse(prevState => ({
        ...prevState,
        score: fullScore
      }));
    } else if (!fullHouse.isLocked) {
      setFullHouse(prevState => ({
        ...prevState,
        score: 0
      }));
    }

    if (valueCount.some(obj => obj.count >= 3)) {
      valueCount.forEach(obj => {
        if (obj.count >= 3 && !threeKind.isLocked) {
          setThreeKind(prevState => ({
            ...prevState,
            score: obj.value * 3
          }));
        }
      });
    } else if (!threeKind.isLocked) {
      setThreeKind(prevState => ({
        ...prevState,
        score: 0
      }));
    }

    if (valueCount.some(obj => obj.count >= 4)) {
      valueCount.forEach(obj => {
        if (obj.count >= 4 && !fourKind.isLocked) {
          setFourKind(prevState => ({
            ...prevState,
            score: obj.value * 4
          }));
        }
      });
    } else if (!fourKind.isLocked) {
      setFourKind(prevState => ({
        ...prevState,
        score: 0
      }));
    }

    if (valueCount.some(obj => obj.count === 5)) {
      valueCount.forEach(obj => {
        if (obj.count === 5 && !yahtzeeScore.isLocked) {
          setYahtzeeScore(prevState => ({
            ...prevState,
            score: 50
          }));
        }
      });
    } else if (!yahtzeeScore.isLocked) {
      setYahtzeeScore(prevState => ({
        ...prevState,
        score: 0
      }));
    }
  };

  const findStraightScore = () => {
    diceVals.sort();
    let counter = 0;
    for (let i=0; i < diceVals.length - 1; i++) {
      if (diceVals[i] - diceVals[i + 1] === -1) {
        counter++;
      }
    }

    if (counter >= 3 && !smallStraight.isLocked) {
      setSmallStraight(prevState => ({
        ...prevState,
        score: 30
      }));
    }
    if (counter === 4 && !largeStraight.isLocked) {
      setLargeStraight(prevState => ({
        ...prevState,
        score: 40
      }));
    }
    if (counter !== 4 && counter !== 3) {
      if (!smallStraight.isLocked) {
        setSmallStraight(prevState => ({
          ...prevState,
          score: 0
        }));
      }
      if (!largeStraight.isLocked) {
        setLargeStraight(prevState => ({
          ...prevState,
          score: 0
        }));
      }
    }
  };

  const findChanceScore = () => {
    let sum = diceVals.reduce((total, current) => (total + current), 0);
    if (typeof(sum) === 'number' && !chanceScore.isLocked) {
      setChanceScore(prevState=> ({
        ...prevState,
        score: sum
      }));
    } else if (!chanceScore.isLocked) {
      setChanceScore(prevState=> ({
        ...prevState,
        score: 0
      }));
    }
  };

  useEffect(() => {
    findUpperScore();
    findOfKindScore();
    findStraightScore();
    findChanceScore();
  }, [die0, die1, die2, die3, die4]);

  const lockScore = (scoreObj) => {
    if (!scoreObj.score.isLocked) {
      scoreObj.setter(prevState => ({
        ...prevState,
        isLocked: true
      }));
    }
  };

  const resetRoll = () => {
    if (round.selection !== null) {
      dice.forEach(dieObj => {
        dieObj.setDieVar({
          value: dieOriginalState,
          isLocked: false
        });
      });

      lockScore(round.selection);

      setRoll(0);
      !oneScore.isLocked && round.selection.score.category !== oneScore.category && setOneScore(oneOriginal);
      !twoScore.isLocked && round.selection.score.category !== twoScore.category && setTwoScore(twoOriginal);
      !threeScore.isLocked && round.selection.score.category !== threeScore.category && setThreeScore(threeOriginal);
      !fourScore.isLocked && round.selection.score.category !== fourScore.category && setFourScore(fourOriginal);
      !fiveScore.isLocked && round.selection.score.category !== fiveScore.category && setFiveScore(fiveOriginal);
      !sixScore.isLocked && round.selection.score.category !== sixScore.category && setSixScore(sixOriginal);
      !threeKind.isLocked && round.selection.score.category !== threeKind.category && setThreeKind(threeKindOriginal);
      !fourKind.isLocked && round.selection.score.category !== fourKind.category && setFourKind(fourKindOriginal);
      !fullHouse.isLocked && round.selection.score.category !== fullHouse.category && setFullHouse(fullHouseOriginal);
      !smallStraight.isLocked && round.selection.score.category !== smallStraight.category && setSmallStraight(smallStraightOriginal);
      !largeStraight.isLocked && round.selection.score.category !== largeStraight.category && setLargeStraight(largeStraightOriginal);
      !yahtzeeScore.isLocked && round.selection.score.category !== yahtzeeScore.category && setYahtzeeScore(yahtzeeScoreOriginal);
      setRound(prevState => ({
        ...prevState,
        selection: null,
        number: prevState.number + 1
      }));
    }
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
    setThreeKind(threeKindOriginal);
    setFourKind(fourKindOriginal);
    setFullHouse(fullHouseOriginal);
    setSmallStraight(smallStraightOriginal);
    setLargeStraight(largeStraightOriginal);
    setChanceScore(chanceScoreOriginal);
    setYahtzeeScore(yahtzeeScoreOriginal);
    setRound({
      number: 0,
      selection: null,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header} onPress={resetGame}>Yahtzee!</Text>
      <View style={styles.gameboard}>
        <Scorecard upperScores={upperScores} lowerScores={lowerScores} setRound={setRound} />

        <View style={styles.diceSection}>
          <Text style={{fontSize: 20}}>Round Selection: {round.selection && round.selection.score.category}</Text>
          <Text style={{fontSize: 20}}>Round: {round.number}</Text>
          <Text style={{fontSize: 20}}>Roll: {roll}</Text>
          <View style={styles.diceContainer}>
            { dice.map((dieObj, idx) => (
              <Dice key={idx} value={dieObj.dieVar.value} isLocked={dieObj.dieVar.isLocked} setDie={dieObj.setDieVar} />
            ))}
          </View>
          { (round.number === 13 && roll === 3) ? (
            <>
            <Text>Game Over</Text>
            <Button title='Play Again' onPress={resetGame} />
            </>
          ) : (roll < 3 ? (
            <Button title='Roll!' onPress={rollDice} />
            ) : (
              <>
              <Text>Roll Over</Text>
              <Button title='Next Round' onPress={resetRoll} />
              </>
          ))}
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
