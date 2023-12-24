import { useState } from 'react';
import { login } from '../util/auth';
import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { authenicate } from '../store/credentialSlice';


function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const dispatch = useDispatch();

  async function loginHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      const token = await login(email, password);
      dispatch(authenicate(token));
    }
    catch (error) {
      Alert.alert('Authentication failed', 'Could not log you in...');
      setIsAuthenticating(false);

    }
  }


  if (isAuthenticating) {
    return <LoadingOverlay message={"Logging you in..."} />
  }





  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
