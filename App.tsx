import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import { Colors } from './constants/styles';
import { Provider } from 'react-redux'
import ReduxStore from './store/ReduxStore';
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { Pressable } from 'react-native';
import { authenicate, logout } from './store/credentialSlice';
import { useEffect, useState } from 'react';
import LoadingOverlay from './components/ui/LoadingOverlay';
// import { AsyncStorage } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();


function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  const dispatch = useDispatch();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} options={{
        headerRight: () => {
          return <Pressable onPress={() => dispatch(logout())}>
            <FontAwesomeIcon icon={faRightFromBracket} color='white' size={24} />
          </Pressable>;
        }
      }} />
    </Stack.Navigator>
  );
}

function Navigation() {
  const isAuthenticated = useSelector((state) =>
    state.authentication.isAuthenticated)

  return (
    <NavigationContainer>
      {isAuthenticated ? <AuthenticatedStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

function Root() {
  const [isFetching, setIsFetching] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchToken() {
      try {
        const storedToken = await AsyncStorage.getItem('token');

        if (storedToken) {
          dispatch(authenicate(storedToken));
        }
      }
      catch (err) {
        console.log(err)
      }
      setIsFetching(false);
    }
    fetchToken();
  }, [])

  if (isFetching) {
    return <LoadingOverlay message={''} />
  }

  return <Navigation />


}

export default function App() {
  return (
    <>
      <Provider store={ReduxStore}>
        <Root />
      </Provider>

    </>
  );
}
