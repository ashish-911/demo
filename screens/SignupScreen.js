import AuthContent from '../components/Auth/AuthContent';
import { createUser } from '../util/auth';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { useState } from 'react';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import { authenicate } from '../store/credentialSlice';


function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const dispatch = useDispatch();

  async function signupHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      const token = await createUser(email, password);
      dispatch(authenicate(token));
    }
    catch (error) {
      Alert.alert('Unable to create user', 'Please try after some time...');
      setIsAuthenticating(false);
    }

  }

  if (isAuthenticating) {
    return <LoadingOverlay message={"Authentication is in process"} />
  }

  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
