import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AllPlaces from "./screens/AllPlaces";
import PlaceDetails from "./screens/PlaceDetails";
import AddPlace from "./screens/AddPlace";
import { Colors } from "./constants/colors";
import ImagePickers from "./components/Places/ImagePicker";
import { LogBox } from 'react-native';
import Map from "./screens/Map";
LogBox.ignoreLogs(['new NativeEventEmitter']);


const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500, },
        headerTintColor: Colors.gray700,
        contentStyle: { backgroundColor: Colors.gray700 }
      }}>
        <Stack.Screen name="AllPlaces" component={AllPlaces} />
        <Stack.Screen name="PlaceDetails" component={PlaceDetails} />
        <Stack.Screen name="AddPlace" component={AddPlace} options={{ title: 'Add a new Place' }} />
        <Stack.Screen name="Map" component={Map} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  text: {
    color: 'black'
  }
});

export default App;
