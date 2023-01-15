import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Music from './screens/music.js';
import Info from './screens/info.js';
import Follow from './screens/follow.js';
import FadeInView from './screens/start.js';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="start" component={(FadeInView)} />
        <Stack.Screen name="Playlist" component={(Music)} />
        <Stack.Screen name="info" component={(Info)} />
        <Stack.Screen name="Follow" component={(Follow)} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

