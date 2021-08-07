import React from 'react';
import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    coverImage:{
        height: '100%',
        width: '100%',
        resizeMode:'cover',
        justifyContent:'center',
        alignItems:'center',
    },
    title:{
        fontSize:60,
        fontWeight:"bold",
        color:"#482acc",
        paddingLeft:20, 
        padding:60,
    },
    button:{
        backgroundColor:'#d5d6d6',
        width:300,
        height:50,
        borderRadius:20,
        justifyContent:"center",
        alignItems:'center',

    },
    buttonText:{
        fontSize:20

    },
    button2:{
        marginTop:20,
        backgroundColor:'#d5d6d6',
        width:300,
        height:50,
        borderRadius:20,
        justifyContent:"center",
        alignItems:'center',

    },
    buttonText2:{
        fontSize:15

    }

});

export default styles;