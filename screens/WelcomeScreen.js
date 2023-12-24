import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import { useSelector } from 'react-redux'

function WelcomeScreen() {
  const [fetchedMessage, setFetchedMessage] = useState();
  const token = useSelector((state) => state.authentication.token)

  useEffect(() => {
    const response =
      axios.get('https://react-native-project-9cbde-default-rtdb.firebaseio.com/message.json?auth=' + token).then((response) =>
        setFetchedMessage(response.data))
  }, [])

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text style={{ color: '#000000' }}>You authenticated successfully!</Text>
      <Text>{fetchedMessage} </Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
