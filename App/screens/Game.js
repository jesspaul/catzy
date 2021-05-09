import React, { useState, useEffect } from 'react';
import { Text, View, Button, SafeAreaView, Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Dice from '../components/Dice';
import Scorecard from '../components/Scorecard';
import colors from '../constants/colors';

export default () => {
  const dieOriginalValue = 0;
  const dieOriginalIcon = 'dice-d6';
  const [die0, setDie0] = useState({
    value: dieOriginalValue,
    icon: dieOriginalIcon,
    isLocked: false
  });
  const [die1, setDie1] = useState({
    value: dieOriginalValue,
    icon: dieOriginalIcon,
    isLocked: false
  });
  const [die2, setDie2] = useState({
    value: dieOriginalValue,
    icon: dieOriginalIcon,
    isLocked: false
  });
  const [die3, setDie3] = useState({
    value: dieOriginalValue,
    icon: dieOriginalIcon,
    isLocked: false
  });
  const [die4, setDie4] = useState({
    value: dieOriginalValue,
    icon: dieOriginalIcon,
    isLocked: false
  });

  let dice = [{dieVar: die0, setDieVar: setDie0}, {dieVar: die1, setDieVar: setDie1}, {dieVar: die2, setDieVar: setDie2}, {dieVar: die3, setDieVar: setDie3}, {dieVar: die4, setDieVar: setDie4}];

  const [roll, setRoll] = useState(0);
  const [round, setRound] = useState({
    number: 1,
    selection: null,
  });  

  const rollDice = () => {
    dice.forEach(dieObj => {
      if (!dieObj.dieVar.isLocked) {
        let randomNum = Math.floor(Math.random()*6) + 1;
        let icon;
        let number;
        if (randomNum === 1) {
          icon = 'dice-one';
          number = 1;
        } else if (randomNum === 2) {
          icon = 'dice-two';
          number = 2;
        } else if (randomNum === 3) {
          icon = 'dice-three';
          number = 3;
        } else if (randomNum === 4) {
          icon = 'dice-four';
          number = 4;
        } else if (randomNum === 5) {
          icon = 'dice-five';
          number = 5;
        } else if (randomNum === 6) {
          icon = 'dice-six';
          number = 6;
        }
        dieObj.setDieVar(prevState => ({
          ...prevState,
          icon: icon,
          value: number
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
  const upperBonusOriginal = 0;

  const [oneScore, setOneScore] = useState(oneOriginal);
  const [twoScore, setTwoScore] = useState(twoOriginal);
  const [threeScore, setThreeScore] = useState(threeOriginal);
  const [fourScore, setFourScore] = useState(fourOriginal);
  const [fiveScore, setFiveScore] = useState(fiveOriginal);
  const [sixScore, setSixScore] = useState(sixOriginal);
  const [upperBonus, setUpperBonus] = useState(upperBonusOriginal);

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
  const yatzyScoreOriginal = {category: 'Yatzy', score: 0, isLocked: false};

  const [threeKind, setThreeKind] = useState(threeKindOriginal);
  const [fourKind, setFourKind] = useState(fourKindOriginal);
  const [fullHouse, setFullHouse] = useState(fullHouseOriginal);
  const [smallStraight, setSmallStraight] = useState(smallStraightOriginal);
  const [largeStraight, setLargeStraight] = useState(largeStraightOriginal);
  const [chanceScore, setChanceScore] = useState(chanceScoreOriginal);
  const [yatzyScore, setYatzyScore] = useState(yatzyScoreOriginal);

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
    score: yatzyScore,
    setter: setYatzyScore
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
        if (obj.count === 5 && !yatzyScore.isLocked) {
          setYatzyScore(prevState => ({
            ...prevState,
            score: 50
          }));
        }
      });
    } else if (!yatzyScore.isLocked) {
      setYatzyScore(prevState => ({
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

  let lockedUpper = upperScores.filter(scoreObj => scoreObj.score.isLocked);
  let lockedLower = lowerScores.filter(scoreObj => scoreObj.score.isLocked);

  let upperTotal = lockedUpper.reduce((total, current) => {
      return total + current.score.score;
  }, 0);

  let lowerTotal = lockedLower.reduce((total, current) => {
      return total + current.score.score;
  }, 0);

  const findUpperBonus = () => {
    if (upperTotal > 63) {
      setUpperBonus(50);
    }
  }


  useEffect(() => {
    findUpperScore();
    findOfKindScore();
    findStraightScore();
    findChanceScore();
    findUpperBonus();
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
          value: dieOriginalValue,
          icon: dieOriginalIcon,
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
      !yatzyScore.isLocked && round.selection.score.category !== yatzyScore.category && setYatzyScore(yatzyScoreOriginal);
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
        value: dieOriginalValue,
        icon: dieOriginalIcon,
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
    setYatzyScore(yatzyScoreOriginal);
    setUpperBonus(upperBonusOriginal);
    setRound({
      number: 1,
      selection: null,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header} onPress={resetGame}>Yatzy!</Text>
      <View style={styles.gameboard}>
        <Scorecard
          upperScores={upperScores}
          lowerScores={lowerScores}
          setRound={setRound}
          upperTotal={upperTotal}
          lowerTotal={lowerTotal}
          upperBonus={upperBonus}
          round={round}
          roll={roll}
        />

        <View style={styles.diceSection}>
          {
            round.number === 13 && round.selection ? (
              <>
              <Text style={styles.gameText}>Game Over</Text>
              <Text style={styles.gameText}>Score: {upperTotal + lowerTotal + upperBonus}</Text>
              </>
            ) : (
              <>
              <View style={styles.gameInfo}>
                <Text style={styles.gameText}>Round: {round.number}</Text>
                <Text style={styles.gameText}>Roll: {roll}</Text>
              </View>
              </>
            )
          }
          <View style={styles.diceContainer}>
            { dice.map((dieObj, idx) => (
              <Dice key={idx} icon={dieObj.dieVar.icon} isLocked={dieObj.dieVar.isLocked} setDie={dieObj.setDieVar} />
            ))}
          </View>
          { (round.number === 13 && round.selection) ? (
            <View style={styles.button}>
              <Button color={colors.buttonText} title='Play Again' onPress={resetGame} />
            </View>
          ) : (roll < 3 && round.selection === null ? (
            <View style={styles.button}>
              <Button color={colors.buttonText} title='Roll!' onPress={rollDice} />
            </View>
            ) : (round.selection === null ? (
              <Text style={[styles.gameText, {marginTop: 14}]}>Select a Score</Text>
            ) : (
              <View style={styles.button}>
                <Button color={colors.buttonText} title='Next Round' onPress={resetRoll} />
              </View>
            )
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

const { width, height } = Dimensions.get('window');
EStyleSheet.build({
  $rem: width > 340 ? 18 : 16,
  $screenWidth: width,
  $screenHeight: height
});

const styles = EStyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },

  diceContainer: {
    flexDirection: 'row',
    marginVertical: '1.5rem'
  },

  diceSection: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.diceBg,
    borderTopRightRadius: '.8rem',
    borderBottomRightRadius: '.8rem'
  },

  header: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginVertical: '.6rem',
    color: colors.text
  },

  gameboard: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  gameInfo: {
    width: '.35 * $screenWidth',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  gameText: {
    fontSize: '1.5rem',
    color: colors.text
  },

  button: {
    backgroundColor: colors.button,
    borderRadius: '.8rem',
  }
});
