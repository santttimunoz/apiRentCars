import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LogIn } from './src/components/LogIn/LogIn';
import { SignUp } from './src/components/SingUp/SignUp';
import { Cars } from './src/components/cars/Cars';
import { Rent } from './src/components/Rent/Rent';
import { ForgotPass } from './src/components/ForgotPass/ForgotPass';
import { ReturnCar } from './src/components/returnCar/ReturnCar';
export default function App() {

  const Stack = createNativeStackNavigator()
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName='App'>
        <Stack.Screen name="LogIn" component={LogIn}/>   
        <Stack.Screen name="SignUp" component={SignUp}/>        
        <Stack.Screen name="ForgotPass" component={ForgotPass}/>
        <Stack.Screen name="Rent" component={Rent}/>
        <Stack.Screen name="Cars" component={Cars}/>
        <Stack.Screen name="ReturnCar" component={ReturnCar}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

