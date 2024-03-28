import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
//import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import {MenuWeb} from '.Menus/MenuWeb';
//import MenuMovil from '.Menus/MenuMovil';

function PerfilScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function CreacionEventoScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

/*const Menu = Platform.select({
    //ios : () => require(MenuMovil),
    default : () => require('MenuMovil'),
    web : () => require('MenuWeb'),
})();*/

export default function App() {
  return (
    //<Menu/>
    <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="Perfil" component={PerfilScreen}/>
                    <Tab.Screen name="Creación Evento" component={CreacionEventoScreen}/>
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
