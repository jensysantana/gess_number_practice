import React, { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native';
import NumberContainer from '../../components/NumberContainer/NumberContainer';
import Card from '../../components/Card/card';

const generateRandomBetween = (min, max, exclude)=>{
    min = Math.floor(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min) + min);

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude)
    }
    return rndNum;
}

const GameScreen = props => {

    const [currentGess, setCurrentGess] = useState(generateRandomBetween(1, 100, props.userChoise))

    return (
        <View style={styles.screen}>
            <Text>Opponent's Gess</Text>
            <NumberContainer >{currentGess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title="Lower" onPress={()=>{}} />
                <Button title="Greater" onPress={()=>{}} />
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:'center'
    },
    buttonContainer:{
        // flex:1,
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop: 20,
        width:300,
        maxWidth: '80%',
    }
})

export default GameScreen;
