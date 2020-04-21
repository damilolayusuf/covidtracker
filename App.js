import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import LoadingScreen from './src/screens/LoadingScreen';
import FriendsScreen from './src/screens/FriendsScreen';
import AddFriendsScreen from './src/screens/AddFriendsScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import {Provider as AuthProvider} from './src/context/authContext';
import {Provider as SympProvider} from './src/context/SymptomContext';
import {Provider as FriendProvider} from './src/context/FriendContext';
import {Provider as FriendSymptomProvider} from './src/context/FriendSymptomContext';
import {setNavigator} from './src/navigationRef';
import AccountScreen from './src/screens/AccountScreen';


const SwitchNavigator = createSwitchNavigator({
  Loading: LoadingScreen,
  //register: RegisterScreen,
  loginFlow: createStackNavigator({
    Signin: SigninScreen,
    Signup: SignupScreen
    
  }),
  register: RegisterScreen,
  mainFlow: createBottomTabNavigator({
    AddFriends: AddFriendsScreen,
    Friends: FriendsScreen,
    Account: AccountScreen
  })
})

const App = createAppContainer(SwitchNavigator);
export default  ()=>{
  return (
    <FriendSymptomProvider>
      <FriendProvider>
        <SympProvider>
          <AuthProvider>
              <App  ref = {(navigator) => {setNavigator(navigator)}}/>
            </AuthProvider>
        </SympProvider>
      </FriendProvider>
    </FriendSymptomProvider> 
  )
}
