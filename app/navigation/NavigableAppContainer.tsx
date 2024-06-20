/**
 * Imports
 */

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StackParamList } from "./StackParamList";
import HomeScreen from "../screens/HomeScreen";
import MovieScreen from "../screens/MovieScreen";
import GasScreen from "../screens/GasScreen";

/**
 * Initialization
 */
const Stack = createStackNavigator<StackParamList>();

/**
 * Main Container
 * Configure navigation routing and screen stack for the application
 */
export default function NavigableAppContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        id={'MainStack::NavigableAppContainer'}
        initialRouteName={'Home'}
        screenOptions={{headerShown: false}}
      >
        <Stack.Screen
          name={'Home'}
          component={HomeScreen}
        />
        <Stack.Screen
          name={'Movie'}
          component={MovieScreen}
        />
        <Stack.Screen
          name={'Gas'}
          component={GasScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}