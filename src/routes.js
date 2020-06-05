/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './pages/Main';
import Cart from './pages/Cart';
import Header from './components/Header';
import * as NavigationServices from './services/navigation';

const Stack = createStackNavigator();
export default function Routes() {
  return (
    <NavigationContainer ref={(ref) => NavigationServices.setNavigator(ref)}>
      <Stack.Navigator
        headerMode="float"
        screenOptions={{
          header: (props) => {
            return <Header {...props} />;
          },
          cardStyle: {
            backgroundColor: '#191920',
          },
        }}
      >
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
