
import { StyleSheet } from 'react-native';

export const PRIMARY_COLOR = "white";
export const PRIMARY_COLOR_DARK = "black";

export const colors = StyleSheet.create({
    primary: { color: PRIMARY_COLOR },
    primary_dark: { color: PRIMARY_COLOR_DARK },
    white: { color: "white" },
    black: { color: "black" }
});

export const backgroundColors = StyleSheet.create({
    primary: { backgroundColor: PRIMARY_COLOR },
    primary_dark: { backgroundColor: PRIMARY_COLOR_DARK },
    white: { backgroundColor: "white" },
    black: { backgroundColor: "black" },
    grey: { backgroundColor: "rgb(59, 57, 65)" }
});

export const layouts = StyleSheet.create({
    zIndex99: { zIndex: 99 },
    centerChildren: { justifyContent: 'center', alignItems: 'center' },
    justifyContentCenter: { justifyContent: 'center', alignItems: 'center' }
});

export const margins = StyleSheet.create({
    leftNegative12: { marginLeft: -12 },
    margin10: { margin: 10 },
    margin30: { margin: 30 },
    marginTop10: { marginTop: 10 },
    marginTop30: { marginTop: 30 }
});

export const paddings = StyleSheet.create({
    padding10: { padding: 10 },
});

export const borderRadiuses = StyleSheet.create({
    noTopBorderRadius: { borderTopLeftRadius: 0, borderTopRightRadius: 0 },
    noBottomBorderRadius: { borderBottomLeftRadius: 0, borderBottomRightRadius: 0 },
    noLeftBorderRadius: { borderTopLeftRadius: 0, borderBottomLeftRadius: 0 },
    noRightBorderRadius: { borderTopRightRadius: 0, borderBottomRightRadius: 0 }
});

export const commonStyles = StyleSheet.create({
    backButtonFA: { marginTop: 10, marginBottom: 40 },
    textInput: {
        borderStyle: "solid",
        borderColor: "white"
    }
});

export const splashPageStyle = StyleSheet.create({
    container: {
        backgroundColor: PRIMARY_COLOR_DARK,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconTextColor: {
        color: PRIMARY_COLOR,
        fontSize: 40,
        fontFamily: 'Monoton-Regular'
    },
    loader: {
        width: 30,
        height: 30
    }
});

export const landingPageStyle = StyleSheet.create({
    container: {
        backgroundColor: PRIMARY_COLOR_DARK,
        flex: 1,
    },
    topPanelView: {
        width: "100%",
        flex: 1
    },
    slideImage: {
        width: 350,
        height: 350
    },
    slideTitle: {
        color: "white",
        fontSize: 45,
        maxWidth: 300,
        textAlign: "center",
        marginTop: 20,
        fontFamily: 'OtomanopeeOne-Regular'
    },
    slideDesc: {
        color: "#d1cfcf",
        fontSize: 18,
        maxWidth: 300,
        textAlign: "center",
        marginTop: 30
    },
    bottomPanelView: {
        width: "100%",
        padding: 30,
        flexDirection: "row",
    },
    landingButtonText: {
        fontSize: 20,
        textAlign: "center",
        fontFamily: 'OtomanopeeOne-Regular'
    },
    bottomPanelButton: {
        backgroundColor: "white",
        padding: 20,
        paddingHorizontal: 30,
        borderRadius: 18,
        flex: 1
    },
    viewTitleText: {
        fontSize: 50,
        fontFamily: 'OtomanopeeOne-Regular'
    },
    viewTitleDesc: {
        marginTop: 20,
        fontSize: 35,
        width: 250
    }
});

export const loginViewStyle = StyleSheet.create({
    actionButton: {
        backgroundColor: "white",
        padding: 20,
        paddingHorizontal: 30,
        borderRadius: 18,
        flex: 1
    }
});

// TODO create styles.light.css.js for light scheme
