import {StyleSheet, SafeAreaView, Linking} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  Iterable,
  IterableConfig,
  IterableInAppMessage,
  IterableInAppShowResponse,
} from '@iterable/react-native-sdk';
import MainScreen from './screens/MainScreen';
import PizzaScreen from './screens/PizzaScreen';
import Colors from './utils/constants/colors';
import {iterableAPIKey} from './Config';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navigationRef} from './RootNavigation';
import * as RootNavigation from './RootNavigation';

const Stack = createNativeStackNavigator();
function App(): JSX.Element {
  useEffect(() => {
    Linking.getInitialURL().then(url => {
      if (url != null) {
        Iterable.handleAppLink(url);
      }
    });
    Linking.addEventListener('url', event => {
      if (event.url != null) {
        Iterable.handleAppLink(event.url);
      }
    });
    // ITERABLE:
    function urlHandler(url: string, _context: any) {
      console.log(`urlHandler, url: ${url}`);
      let match = url.match(/menu\/([^/]+)/i);
      console.log('match:' + match);
      console.log('if statement' + (match && match.length > 1));
      if (match && match.length > 1) {
        const id = match[1];
        console.log('id:' + id);
        RootNavigation.navigate('Pepperoni');
        return true;
      } else {
        console.log('opening external url');
        return false;
      }
    }
    // ITERABLE:
    const config = new IterableConfig();
    config.inAppHandler = (message: IterableInAppMessage) => {
      console.log(message);
      return IterableInAppShowResponse.show;
    };
    config.urlHandler = urlHandler;
    config.autoPushRegistration = true;
    console.log(config);
    Iterable.initialize(iterableAPIKey, config);
    //
  });

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Pepperoni" component={PizzaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});

export default App;
