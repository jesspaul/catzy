import React from 'react';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome5 } from '@expo/vector-icons';
import Home from '../screens/Home';
import Instructions from '../screens/Instructions';
import Game from '../screens/Game';
import colors from '../constants/colors';

const MainStack = createStackNavigator();
const MainStackScreen = () => (
    <MainStack.Navigator>
        <MainStack.Screen
            name='Home'
            component={Home}
            options={{ headerShown: false }}
        />

        <MainStack.Screen
            name='Instructions'
            component={Instructions}
            options={({ navigation }) => ({
                headerStyle: {
                    backgroundColor: colors.diceBg,
                    height: 50
                },
                headerLeft: () => (
                    <TouchableOpacity onPress={() => navigation.pop()} style={{ paddingHorizontal: 10}}>
                        <FontAwesome5 name='arrow-circle-left' size={30} color={colors.text} />
                    </TouchableOpacity>
                )
            })}
        />

        <MainStack.Screen
            name='Game'
            component={Game}
            options={{ headerShown: false }}
        />
    </MainStack.Navigator>
);

export default () => (
    <NavigationContainer>
        <MainStackScreen />
    </NavigationContainer>
);