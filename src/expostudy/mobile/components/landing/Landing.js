/*
    Adewale Azeez
    July 18th, 2021
*/

import Login from './Login';
import React, { Node, Component } from 'react';
import { AppName, projectTexts, buildSlider } from "../../variables";
import { colors, margins, layouts, backgroundColors, borderRadiuses, landingPageStyle } from "../../../../../assets/css/styles.css"
import { BackHandler, StatusBar, SafeAreaView, ScrollView, View, Image, Text, TouchableOpacity, useColorScheme } from 'react-native';

const buildSliderView = (imageSrc, title, desc) => {
    return (<View style={layouts.centerChildren, layouts.justifyContentCenter}>
        <Image 
            source={{uri: imageSrc}}
            resizeMode={"center"}
            style={[landingPageStyle.slideImage]} />
        <View>
            <Text style={landingPageStyle.slideTitle}>{title}</Text>
            <Text style={landingPageStyle.slideDesc}>{desc}</Text>
        </View>
    </View>)
}

const SliderViews = [
    buildSliderView(projectTexts.slides[0].img_src, projectTexts.slides[0].title, projectTexts.slides[0].desc),
    buildSliderView(projectTexts.slides[2].img_src, projectTexts.slides[2].title, projectTexts.slides[2].desc),
    buildSliderView(projectTexts.slides[1].img_src, projectTexts.slides[1].title, projectTexts.slides[1].desc)
]

const LandingView = (props) => {
    let sliderInterval;
    const [slideView, setSlideView] = React.useState(SliderViews[0]);
    const cleanup = () => {
        clearInterval(sliderInterval);
    }

    React.useEffect(() => {
        sliderInterval = buildSlider(5, SliderViews, setSlideView);
    }, []);

    return (
        <SafeAreaView style={landingPageStyle.container}>
            <ScrollView style={[landingPageStyle.topPanelView, margins.marginTop30]}>
                {slideView}
            </ScrollView>
            <View style={landingPageStyle.bottomPanelView}>
                <TouchableOpacity style={[landingPageStyle.bottomPanelButton, layouts.zIndex99]} 
                    onPress={() => {
                        if (props.forwardRef.setCurrentLandingView) {
                            props.forwardRef.isOnLandingPage.current = false;
                            props.forwardRef.setCurrentLandingView(props.forwardRef.loginView)
                            cleanup();
                        }
                    }}>
                    <Text style={[landingPageStyle.landingButtonText, colors.black]}>{projectTexts.basic.login}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[landingPageStyle.bottomPanelButton, margins.leftNegative12, backgroundColors.grey, borderRadiuses.noLeftBorderRadius]}>
                    <Text style={[landingPageStyle.landingButtonText, colors.white]}>{projectTexts.basic.register}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const Landing: () => Node = ({ navigation }) => {
    const isDarkMode = useColorScheme() === 'dark';
    const forwardRef = {};
    const isOnLandingPage = React.useRef(true);
    const landingView = LandingView({navigation, forwardRef, pageColorSchemeStyle: (isDarkMode ? "landingPageDarkScheme" : "landingPageLightScheme")});
    const loginView = Login({navigation, forwardRef});
    const [currentLandingView, setCurrentLandingView] = React.useState(loginView);
    const cleanup = () => {
    }
    const goBack = () => {
        if (!isOnLandingPage.current) {
            setCurrentLandingView(landingView);
        } else {
            cleanup();
            // shutdown and exsit app, show toast to say click twice to exit
        }
        return true;
    }
    
    React.useEffect(() => {
        forwardRef.isOnLandingPage = isOnLandingPage;
        forwardRef.landingView = landingView;
        forwardRef.loginView = loginView;
        forwardRef.setCurrentLandingView = setCurrentLandingView;
        StatusBar.setHidden(true);
        BackHandler.addEventListener('hardwareBackPress', goBack);
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', goBack);
        };
    }, []);
    // TODO slider not working

    return currentLandingView;
};

export default Landing;