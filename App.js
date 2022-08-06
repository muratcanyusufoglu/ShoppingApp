import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AppPage from './src/App';
import {ContextProvider} from './src/Context/NewContext'
import ShoppingCart from './src/components/Card/ShoppingCart/ShoppingCart';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <ContextProvider>
     <NavigationContainer>
       <Stack.Navigator>
        <Stack.Screen name="Home" component={AppPage}/>
        <Stack.Screen name="Basket" component={ShoppingCart} />
       </Stack.Navigator>
     </NavigationContainer>
    </ContextProvider>
  );
}

export default App;