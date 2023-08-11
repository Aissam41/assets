import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AccountScreen from './src/Login/AccountScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
     <NavigationContainer>
     <Stack.Navigator>
       <Stack.Screen
         name="Account"
         component={AccountScreen}  
         options={{
          headerShown: false, // Masquer l'en-tête complet de l'écran "Profile"
      
          }} />   
             
     </Stack.Navigator>
   </NavigationContainer>
  );
}
export default App;