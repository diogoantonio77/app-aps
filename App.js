import React from 'react';
import { StyleSheet } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import  Icon  from 'react-native-vector-icons/Ionicons'

import Home from './src/pages/home';
import Contatos from './src/pages/contatos';
import Postagem from './src/pages/postagem';
import Vagas from './src/pages/vagas';


const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    name: 'ios-home'
  },
  Contatos: {
    name: 'ion-ios-contacts'
  },
  Postagem: {
    name: 'ion-ios-add-circle'
  },
  Vagas: {
    name: 'ion-ios-briefcase'
  }
}

export default function App() {
  return (
    <NavigationContainer>
        <Tab.Navigator
          screenOptions= { (route) => ({
            tabBarIcon: ({ color, size }) => {
              const {name} = icons[route.name];
              return <Icon name={name} color={color} size={size} />
            }
          }) }
          tabBarOptions={{
            style:{
              backgroundColor: '#000'
            },
            activeBackgroundColor: '#FFF'
          }}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Contatos" component={Contatos} />
            <Tab.Screen name="Publicação" component={Postagem} />
            <Tab.Screen name="Vagas" component={Vagas} />
        </Tab.Navigator>
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
