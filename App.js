import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Text, View} from 'react-native';
import Welcome from './src/screens/Welcome';
import Signup from './src/screens/Signup';
import Verify from './src/screens/Verify';
import ReceiveCode from './src/screens/ReceiveCode';
import Signin from './src/screens/Signin';
import WelcomeOuth from './src/screens/WelcomeOuth';
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="welcome" component={Welcome} />
        <Stack.Screen name="signup" component={Signup} />
        <Stack.Screen name="verify" component={Verify} />
        <Stack.Screen name="receivecode" component={ReceiveCode} />
        <Stack.Screen name="signin" component={Signin} />
        <Stack.Screen name="welcomeOuth" component={WelcomeOuth} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
