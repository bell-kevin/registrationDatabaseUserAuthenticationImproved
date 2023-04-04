import { useContext } from 'react';
import { Alert, View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { UserContext } from '../context/userContext';
import { addUser } from '../util/http';
import { AuthContext } from '../context/authContext';

function ValidateScreen() {
  const navigation = useNavigation();

  const userCtx = useContext(UserContext);
  const authCtx = useContext(AuthContext);

  // Add user to database and go back to home screen on button press
  async function yesPressHandler() {
    userData = {
      firstName: userCtx.user.firstName,
      lastName: userCtx.user.lastName,
      phone: userCtx.user.phone,
    };
    try {
      await addUser(userData);
      authCtx.setProvidedData(true);
      navigation.navigate('Welcome'); // navigate to WelcomeScreen
    } catch (error) {
      Alert.alert(
        'Alert',
        'Could not add user',
        [{ text: 'OK', style: 'destructive' }]
      );
      navigation.navigate('Name'); // navigate to NameScreen
    }
  }
  
  function noPressHandler() {
    Alert.alert(
      'Alert',
      'Okay, you can enter info again.',
      [{ text: 'OK', style: 'destructive' }]
    );
    navigation.navigate('Name'); // navigate to NameScreen
  }
  

  return (
    <View style={styles.container}>
      <View style={styles.textsContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>First Name: {userCtx.user.firstName}</Text>
          <Text style={styles.text}>Last Name: {userCtx.user.lastName}</Text>
          <Text style={styles.text}>Phone Number: {userCtx.user.phone}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Is the above info correct?</Text>
        </View>
      </View>

      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <Button
            title='Yes'
            color='orangered'
            onPress={yesPressHandler}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title='No'
            color='orangered'
            onPress={noPressHandler}
          />
        </View>
      </View>
    </View>
  );
}

export default ValidateScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'palegoldenrod',
    flex: 1,
    alignItems: 'center',
  },
  textsContainer: {
    width: '75%',
    marginTop: 150,
  },
  textContainer: {
    marginTop: 16,
  },
  text: {
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 18,
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  buttonContainer: {
    width: 100,
    marginHorizontal: 40,
  },
});
