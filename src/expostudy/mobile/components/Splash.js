/*
    Adewale Azeez
    July 18th, 2021
*/

import Landing from "./landing/Landing";
import { AppName, secondsToMilliSeconds } from "../variables";
import React, { Node, Component, useEffect } from 'react';
import { splashPageStyle } from "../../../../assets/css/styles.css"
import { StatusBar, View, Image, Text, Button, useColorScheme } from 'react-native';

function isUserLoggedIn() {
    // TODO check if logged, if logged in goto dashboard else login/signup
    return false;
}

const Splash = ({ navigation }) => {
    const alreadyLoggedIn = isUserLoggedIn();
    const isDarkMode = useColorScheme() === 'dark';
    StatusBar.setHidden(true);
    //(alreadyLoggedIn ? <Dashboard /> : <Landing />)

    useEffect(() => {
        setTimeout(() => {
            if (alreadyLoggedIn) {
                // goto dashboard
            } else {
                navigation.navigate('Landing', { })
            }
        }, secondsToMilliSeconds(1))
    }, [])

    return (
        <View style={splashPageStyle.container}>
            <Text style={splashPageStyle.iconTextColor}>{AppName}</Text>
            <Image 
                source={{uri: 'http://media.giphy.com/media/s4KqhlPU9Ypnq/giphy.gif'}}  
                style={splashPageStyle.loader} />
        </View>
    );
};

export default Splash;