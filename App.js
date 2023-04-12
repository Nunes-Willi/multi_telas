import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from "react-native-paper";

import Home from "./telas/Home";
import Capcom from "./telas/Capcom";
import EletronicArts from "./telas/ElectronicArts";
import Nintendo from "./telas/Nintendo";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.telas name="Home" component={Home} />
          <Stack.telas name="Capcom" component={Capcom} />
          <Stack.telas name="Eletronic Arts (EA)" component={EletronicArts} />
          <Stack.telas Name="Nintendo" component={Nintendo} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
