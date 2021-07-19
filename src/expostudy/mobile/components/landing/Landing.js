/*
    Adewale Azeez
    July 18th, 2021
*/

import { AppName } from "../../variables";
import React, { Node, Component } from 'react';
import { landingPageStyle } from "../../../../../assets/css/styles.css"
import { StatusBar, View, Image, Text, Button, useColorScheme } from 'react-native';

const Landing: () => Node = () => {
    const isDarkMode = useColorScheme() === 'dark';
    StatusBar.setHidden(true);

    return (
        <View style={landingPageStyle.container}>
            <Text style={landingPageStyle.iconTextColor}>{AppName}</Text>
            <Image 
                source={{uri: 'http://media.giphy.com/media/s4KqhlPU9Ypnq/giphy.gif'}}  
                style={landingPageStyle.loader} 
            />
        </View>
    );
};

export default Landing;