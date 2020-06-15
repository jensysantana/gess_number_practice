import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/header/header';
import StatartGameScreen from './screens/StatartGameScreen/StatartGameScreen';
import GameScreen from './screens/GameScreen/GameScreen';

export default function App() {

  const [userNumber, setUserNumber] = React.useState();

  const startGameHandle = (selectedNumberInput)=>{
    setUserNumber(selectedNumberInput)
  }

  let content = <StatartGameScreen onStartGame={startGameHandle} />;
  if (userNumber) {
    content = <GameScreen userChoise={userNumber} />;
  }

  return (
    <View style={styles.screen}>
      <Header title="Gess a number"/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // backgroundColor: '#f7287b',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
