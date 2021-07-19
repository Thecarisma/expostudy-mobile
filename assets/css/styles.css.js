
import { StyleSheet } from 'react-native';

export const PRIMARY_COLOR = "white";
export const PRIMARY_COLOR_DARK = "black";

export const landingPageStyle = StyleSheet.create({
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
