import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../global/styles/theme';

import { Home } from '../screens/home';
import { SignIn } from '../screens/signIn';

const { Navigator, Screen } = createStackNavigator();

export type RootStackParamsList = {
   SignIn: undefined;
   Home: undefined;
}

export function AuthRoutes() {
   const { secondary80, secondary100 } = theme.colors;
   return (
      <Navigator
         screenOptions={{
            cardStyle: {
               backgroundColor: 'transparent'
            }
         }}
      >
         <Screen
            name="SignIn"
            component={SignIn}
            options={{ headerShown: false }}
         />
         <Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
         />
      </Navigator>
   )
}