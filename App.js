import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SplashLayout from './src/layouts/splashLayout';
import JitsiMeetLayout from './src/layouts/jitsiMeetLayout';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Splash'}>
        <Stack.Screen
          name="Splash"
          component={SplashLayout}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Room"
          component={JitsiMeetLayout}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
