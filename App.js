import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React ,{useState} from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { Home } from "./screens/";
import * as Font from 'expo-font';
import { AppLoading } from 'expo';


// const fetchFonts = () => {  לא עובד הפרונטים
//   return Font.loadAsync({
//   'Roboto-Black': require('./assets/fonts/Roboto-Bold.ttf'),
//   'Roboto-BlackItalic': require('./assets/fonts/Roboto-BlackItalic.ttf'),
//   'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
//   'Roboto-BoldItalic': require('./assets/fonts/Roboto-BoldItalic.ttf'),
//   'Roboto-Italic': require('./assets/fonts/Roboto-Italic.ttf'),
//   'Roboto-Light': require('./assets/fonts/Roboto-Light.ttf'),
//   'Roboto-LightItalic': require('./assets/fonts/Roboto-LightItalic.ttf'),
//   'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
//   'Roboto-MediumItalic': require('./assets/fonts/Roboto-MediumItalic.ttf'),
//   'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
//   'Roboto-Thin': require('./assets/fonts/Roboto-Thin.ttf'),
//   'Roboto-ThinItalic': require('./assets/fonts/Roboto-ThinItalic.ttf'),
//   'RobotoCondensed-Bold': require('./assets/fonts/RobotoCondensed-Bold.ttf'),
//   'RobotoCondensed-BoldItalic': require('./assets/fonts/RobotoCondensed-BoldItalic.ttf'),
//   'RobotoCondensed-Italic': require('./assets/fonts/RobotoCondensed-Italic.ttf'),
//   'RobotoCondensed-Light': require('./assets/fonts/RobotoCondensed-Light.ttf'),
//   'RobotoCondensed-LightItalic': require('./assets/fonts/RobotoCondensed-LightItalic.ttf'),
//   'RobotoCondensed-Regular': require('./assets/fonts/RobotoCondensed-Regular.ttf'),
//   });
//   };

const theme = {
  ...DefaultTheme,
  colors: {
      ...DefaultTheme.colors,
      border: "transparent",
  },
};

const Stack = createStackNavigator();

const App = ()=> {


  // קשור לפרונטים
  // const [dataLoaded, setDataLoaded] = useState(false);  
  
  // if (!dataLoaded) {
  //   return (
  //     <AppLoading
  //       startAsync={fetchFonts}
  //       onFinish={() => setDataLoaded(true)}
  //     />
  //   );
  // }

  return(
    <NavigationContainer theme={theme}>
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
        initialRouteName={'Home'}
    >
        <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App;



// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
