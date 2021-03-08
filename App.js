import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginPage from './ClassComponent/LoginPage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();



function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="LoginPage">
      <Drawer.Screen
        name="Login"
        component={LoginPage}
        options={{ drawerLabel: 'Login' }}
      />
      {/* <Drawer.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{ drawerLabel: 'Forgot Password?' }}
      />
      <Drawer.Screen
        name="Register"
        component={Register}
        options={{ drawerLabel: 'New User? Register Now!' }}
      />
      <Drawer.Screen
        name="About"
        component={About}
        options={{ drawerLabel: 'About ExPa' }}
      /> */}
    </Drawer.Navigator>
  );
}

// function ForgotPassword() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <CCForgetPW />
//     </View>
//   );
// }

// function Register() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <CCRegister />
//     </View>
//   );
// }

// function About() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <CCAbout />
//     </View>
//   );
// }



export default function App() {
  return (
    // <View style={styles.container}>
    //   {/* <Text>Ben ata Maniak</Text> */}
    //   <LoginPage/>
    //   <StatusBar style="auto" />
    // </View>

    <NavigationContainer>
      <MyDrawer>
        <Stack.Navigator initialRouteName="LoginPage">
          {/* <Stack.Screen name="- My Notes -" component={CCLog} /> */}
          {/* <Stack.Screen name="ForgotPassword" component={CCForgetPW} /> */}
          {/* <Stack.Screen name="Register" component={CCRegister} />
          <Stack.Screen name="About" component={CCAbout} /> */}
        </Stack.Navigator>
      </MyDrawer>
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
