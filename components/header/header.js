import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Colors from '../../constants/Colors'

const Header = props => {
    return (
        <View style={style.header}>
            <Text style={style.headerTitle}>{props.title}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    header:{
        width:'100%',
        height:90,
        paddingTop: 36,
        backgroundColor: Colors.primary,
        alignItems:'center',
        justifyContent:'center'
    },
    headerTitle:{
        color:'#000',
        fontSize:18
    }
})


export default Header
