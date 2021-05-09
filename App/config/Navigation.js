import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import Instructions from '../screens/Instructions';
import Game from '../screens/Game';

const MainStack = createStackNavigator();
const MainStackScreen = () => (
    <MainStack.Navigator>
        <MainStack.Screen name='Home' component={Home} />
        <MainStack.Screen name='Instructions' component={Instructions} />
        <MainStack.Screen name='Game' component={Game} />
    </MainStack.Navigator>
);

export default () => (
    <NavigationContainer>
        <MainStackScreen />
    </NavigationContainer>
);