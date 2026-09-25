import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";


import Home from './screens/Home';
import Albuns from './screens/Albuns';
import DetalhesA from './screens/DetalhesA';
import Cantores from './screens/Cantores';
import DetalhesC from './screens/DetalhesC';

const Drawer = createDrawerNavigator();

export default function App(){
  return (
  <NavigationContainer>
    <Drawer.Navigator
    initialRouteName="Home"
    backBehavior="history"
    screenOptions={{
      headerStyle: {
        backgroundColor: '#133081'
      },
       headerTintColor: '#085852',
       drawerActiveTintColor: '#00ccff',
       drawerInactiveTintColor: '#001527'
    }}
    >
      <Drawer.Screen
      name="Home"
      component={Home}
      options={{
        title: 'Início',
        drawerLabel: 'Início'
      }}
      />

      <Drawer.Screen
      name="Albuns"
      component={Albuns}
      options={{
        title: 'Lista de Albuns Bons :3',
        drawerLabel: 'Lista De Albuns'
      }}
      />

      <Drawer.Screen
      name="DetalhesA"
      component={DetalhesA}
      options={{
        title: 'Detalhes dos Albuns Bons :3',
        drawerItemStyle: {
          display: 'none'
        }
      }}
      />

      <Drawer.Screen
      name="Cantores"
      component={Cantores}
      options={{
        title: 'Lista de Cantoras Boas :3',
        drawerLabel: 'Lista De Cantores'
      }}
      />

      <Drawer.Screen
      name="DetalhesC"
      component={DetalhesC}
      options={{
        title: 'Detalhes das Cantoras Boas :3',
        drawerItemStyle: {
          display: 'none'
        }
      }}
      />

    </Drawer.Navigator>
  </NavigationContainer>
  )
}