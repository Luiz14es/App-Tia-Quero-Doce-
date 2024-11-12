import React from 'react';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { AuthProvider, useAuth } from './AuthContext';
import Doces from './assets/pages/doces';
import Formulario from './assets/pages/formulario';
import HomeScreen from './assets/pages/HomeScreen';
import Login from './assets/pages/login';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: '#ff6c50' },
        tabBarLabelStyle: { color: '#fff', fontSize: 14, fontFamily: 'Roboto' },
        tabBarIndicatorStyle: { backgroundColor: '#fff' },
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Doces" component={Doces} />
      <Tab.Screen name="Faça seu pedido" component={Formulario} />
    </Tab.Navigator>
  );
}

function AppNavigator() {
  const { isLoggedIn } = useAuth();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isLoggedIn ? (
        <Stack.Screen name="MainTabs" component={MainTabs} />
      ) : (
        <Stack.Screen name="Login" component={Login} />
      )}
    </Stack.Navigator>
  );
}

export default function App() {
  let [fontsLoaded] = useFonts({
    'Lobster': require('./assets/fonts/Lobster-Regular.ttf'),
    'Roboto': require('./assets/fonts/Roboto-Regular.ttf'),
    'RobotoBold': require('./assets/fonts/Roboto-Bold.ttf'),
  });

  if (!fontsLoaded) return null;

  return (
    <AuthProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
}
