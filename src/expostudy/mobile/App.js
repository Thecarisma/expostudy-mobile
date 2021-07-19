/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import 'react-native-gesture-handler';
import Splash from "./components/Splash";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const App: () => Node = () => {
    return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Splash" component={Splash}  options={{ headerShown: false }}/>
          </Stack.Navigator>
        </NavigationContainer>
    )
};

export default App;
