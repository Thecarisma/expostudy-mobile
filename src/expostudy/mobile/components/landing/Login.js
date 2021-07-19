/*
    Adewale Azeez
    July 19th, 2021
*/

import React, { Node, Component } from 'react';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { AppName, projectTexts, buildSlider } from "../../variables";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { BackHandler, StatusBar, SafeAreaView, ScrollView, View, Image, Text, TextInput, TouchableOpacity, useColorScheme } from 'react-native';
import { colors, margins, layouts, backgroundColors, borderRadiuses, commonStyles, landingPageStyle, loginViewStyle } from "../../../../../assets/css/styles.css"

const Login = (props) => {
    const [email, onChangeEmail] = React.useState(null);
    const cleanup = () => {
    }
    const goBack = () => {
        props.forwardRef.isOnLandingPage.current = true;
        props.forwardRef.setCurrentLandingView(props.forwardRef.landingView)
        cleanup();
    }

    return (
        <SafeAreaView style={landingPageStyle.container}>
            <ScrollView style={[landingPageStyle.topPanelView, margins.margin30]}>
                <FontAwesomeIcon icon={faChevronLeft} style={[commonStyles.backButtonFA, colors.white]} size={25} onPress={goBack}/>
                <Text style={[landingPageStyle.viewTitleText, colors.white]}>{projectTexts.landing_page.login.title}</Text>
                <Text style={[landingPageStyle.viewTitleDesc, colors.white]}>{projectTexts.landing_page.login.desc}</Text>
                <View>
                <TextInput style={commonStyles.textInput}
                    onChangeText={onChangeEmail}
                    value={email} />
                </View>
            </ScrollView>
            <View style={landingPageStyle.bottomPanelView}>
                <TouchableOpacity style={[loginViewStyle.actionButton]} 
                    onPress={() => {
                        console.log("API LOGIC: login")
                    }}>
                    <Text style={[landingPageStyle.landingButtonText, colors.black]}>{projectTexts.basic.login}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default Login;
