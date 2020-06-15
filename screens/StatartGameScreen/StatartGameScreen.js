import React, { useState } from 'react'
import { 
    View, 
    Text, 
    StyleSheet, 
    TextInput, 
    Button,
    TouchableWithoutFeedback,
    Keyboard,
    Alert
} from 'react-native'
import Card from '../../components/Card/card'
import Colors from '../../constants/Colors'
import Input from '../../components/Input/Input'
import NumberContainer from '../../components/NumberContainer/NumberContainer'

const StatartGameScreen = ({onStartGame, ...props}) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState('');

    const numberInputHandle = inputText=>{
        setEnteredValue(inputText.replace(/[^0-9]/g, '')) //replace if not an number
    }
    const resetInputHandle = inputText=>{
        setConfirmed(false) //replace if not an number
        setEnteredValue('') //replace if not an number
    }
    const confirmInputHandle = ()=>{

        const choseNumber = parseInt(enteredValue);
        console.log('---------choseNumber---------');
        console.log(typeof choseNumber);
        console.log(choseNumber);
        console.log('---------choseNumber---------');
        if (typeof choseNumber !== 'number' || choseNumber <= 0 || choseNumber > 99) {
            console.log(11111);
            Alert.alert('Invalid number', 'Number has to be a number between 1 and 99.', [{
                text:'Okay',
                style:'destructive', onPress:resetInputHandle
            }])
            return;
        }
        
        setConfirmed(true) //replace if not an number
        setSelectedNumber(choseNumber)
        setEnteredValue('') //replace if not an number
        Keyboard.dismiss()
    }

    let confirmedOutPut;

    if (confirmed) {
        confirmedOutPut = (
            <Card style={styles.summaryContainer}>
                <Text>Chosen Number: {selectedNumber} </Text>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <Button title="START GAME" onPress={()=>onStartGame(selectedNumber)} />
            </Card>
        ) 
    }

    return (
        <TouchableWithoutFeedback onPress={()=>{
            Keyboard.dismiss();
        }}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start a New Game</Text>
                <Card style={styles.inputContainer}>
                    <Text>Select a number</Text>
                    <Input 
                        blurOnSubmit 
                        autoCapitalize="none" 
                        autoCorrect={false} 
                        keyboardType="number-pad"
                        maxLength={2} 
                        style={styles.input} 
                        value={enteredValue}
                        onChangeText={numberInputHandle}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button title="reset" 
                                onPress={resetInputHandle} 
                                color={Colors.accent}
                            />
                        </View>
                        <View style={styles.button}>
                            <Button 
                                title="Confirm" 
                                onPress={confirmInputHandle}
                                color={Colors.primary}
                            />
                        </View>
                    </View>
                </Card>
                {confirmedOutPut}
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems: 'center',
        // justifyContent:'flex-start'
    },
    title: {
        fontSize:20,
        marginVertical: 10,

    },
    buttonContainer: {
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
        paddingHorizontal:15
    },
    inputContainer:{
        width:300,
        maxHeight:'80%',
        alignItems:'center',
    },
    button:{
        width:100
    },
    input:{
        width:50,
        textAlign:'center'
    },
    summaryContainer:{
        marginTop: 20, 
        alignItems:'center'
    }
})

export default StatartGameScreen;
