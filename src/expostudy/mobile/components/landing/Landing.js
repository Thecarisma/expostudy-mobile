/*
    Adewale Azeez
    July 18th, 2021
*/

import Login from './Login';
import React, { Node, Component } from 'react';
import { AppName, projectTexts, buildSlider } from "../../variables";
import { colors, margins, layouts, backgroundColors, borderRadiuses, landingPageStyle } from "../../../../../assets/css/styles.css"
import { BackHandler, StatusBar, SafeAreaView, ScrollView, View, Image, Text, TouchableOpacity, useColorScheme } from 'react-native';

const LandingView = (props) => {
    const cleanup = () => {
		if (props.cleanup) props.cleanup();
    }

    return (
        <SafeAreaView style={landingPageStyle.container}>
            <ScrollView style={[landingPageStyle.topPanelView, margins.marginTop30]}>
				<View style={layouts.centerChildren, layouts.justifyContentCenter}>
					<Image 
						source={{uri: props.currentSlide.img_src}}
						resizeMode={"center"}
						style={[landingPageStyle.slideImage]} />
					<View>
						<Text style={landingPageStyle.slideTitle}>{props.currentSlide.title}</Text>
						<Text style={landingPageStyle.slideDesc}>{props.currentSlide.desc}</Text>
					</View>
				</View>
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

function buildLandingPage(navigation, forwardRef, slide, isDarkMode, cleanup) {
	return LandingView({navigation, forwardRef, cleanup, currentSlide: slide, pageColorSchemeStyle: (isDarkMode ? "landingPageDarkScheme" : "landingPageLightScheme")});
}

const Landing: () => Node = ({ navigation }) => {
    const isDarkMode = useColorScheme() === 'dark';
    const forwardRef = {};
    let sliderInterval;
    const cleanup = () => {
        clearInterval(sliderInterval);
		console.log("CLEANING UP");
    }
    const isOnLandingPage = React.useRef(true);
    const [currentSlide, setCurrentSlide] = React.useState(projectTexts.slides[0]);
    const landingView = buildLandingPage(navigation, forwardRef, projectTexts.slides[0], isDarkMode, cleanup);
    const loginView = Login({navigation, forwardRef});
    const [currentLandingView, setCurrentLandingView] = React.useState(landingView);
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
		sliderInterval = buildSlider(5, projectTexts.slides, (slide) => {
			console.log("Current Slide: ", slide)
			setCurrentLandingView(buildLandingPage(navigation, forwardRef, slide, isDarkMode, cleanup));
		});
        forwardRef.isOnLandingPage = isOnLandingPage;
        forwardRef.landingView = landingView;
        forwardRef.loginView = loginView;
        forwardRef.setCurrentLandingView = setCurrentLandingView;
        StatusBar.setHidden(true);
        BackHandler.addEventListener('hardwareBackPress', goBack);
        return () => {
			console.log("BACK TO SLIDER PAGE");
            BackHandler.removeEventListener('hardwareBackPress', goBack);
        };
    }, []);
    // TODO slider not working

    return currentLandingView;
};

export default Landing;