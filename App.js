import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tela1Screen from './src/screens/Tela1Screen';
import Tela2Screen from './src/screens/Tela2Screen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Tela1'>
        <Stack.Screen name="Tela1" component={Tela1Screen} />
        <Stack.Screen name="Tela2" component={Tela2Screen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
