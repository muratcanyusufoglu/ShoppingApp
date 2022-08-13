import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AppPage from './src/App';
import {ContextProvider} from './src/Context/NewContext'
import ShoppingCart from './src/components/Card/ShoppingCart/ShoppingCart';
import Payment from './src/Payment/payment';
import store from './src/redux/store';
import {Provider} from 'react-redux';


const Stack = createNativeStackNavigator();

function App() {
  return (
  <Provider store={store}>
    <ContextProvider>
     <NavigationContainer>
       <Stack.Navigator initialRouteName='Payment'>
        <Stack.Screen name="Payment" component ={Payment}/>
        <Stack.Screen name="Home" component={AppPage}/>
        <Stack.Screen name="Basket" component={ShoppingCart} />
       </Stack.Navigator>
     </NavigationContainer>
     </ContextProvider>
  </Provider>
  );
}

export default App;