import React from 'react';
import { StyleSheet } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import  Icon  from 'react-native-vector-icons/Ionicons'

import posts from './src/pages/posts';
import feeds from './src/pages/feed';
import galery from './src/pages/galery';
import Vagas from './src/pages/vagas';


const Tab = createBottomTabNavigator();

const icons = {
  posts: {
    name: 'add-circle-outline'
  },
  feeds: {
    name: 'planet-outline'
  },
  galery: {
    name: 'document-outline'
  },
  profile: {
    name: 'people-outline'
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
            <Tab.Screen name="posts" component={posts} />
            <Tab.Screen name="feeds" component={feeds} />
            <Tab.Screen name="Publicação" component={galery} />
            <Tab.Screen name="Vagas" component={profile} />
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
