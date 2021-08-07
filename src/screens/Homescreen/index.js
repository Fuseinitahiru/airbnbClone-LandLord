import React from 'react';
import { View,Text, ImageBackground,StyleSheet ,Pressable } from 'react-native';

import styles from './styles'

const HomeScreen = () => {
    return(
        
        <ImageBackground
            source={require('../../images/accra.jpeg')}
            style={styles.coverImage}>
            
            <Text style={styles.title}>Welcome to LandLord</Text>
            
            <Pressable style={styles.button} 
                onPress={() => console.warn(  'Welcome Press')}>

                <Text style={styles.buttonText} >Sign Up</Text>
            </Pressable>

            <Pressable style={styles.button2} 
                onPress={() => console.warn(  'Welcome Press')}>

                <Text style={styles.buttonText2} >Already a User, SignIn</Text>
            </Pressable>

         </ImageBackground>
        
    );
}

export default HomeScreen;

