import { useContext } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

import { screens } from '../constants/Style';
import { UserContext } from '../context/userContext';

function EmailScreen({ navigation }) {
  // Set universal colors
  const colors = {
    backgroundColor: 'steelblue',
    color: 'navy',
  };

  const userCtx = useContext(UserContext);

  // Change values within the context
  function changeEmailHandler(text) {
    userCtx.changeEmail(text);
  }

  // Navigate to next screen
  function nextButtonHandler() {
    if (userCtx.user.emValid) {
      navigation.navigate('ValidateScreen');
    }
  }


  return (
    <View style={[screens.container, colors]}>
      <View style={screens.textContainer}>
        <Text style={[screens.header, colors]}>Enter your email address</Text>
        <TextInput
          style={[screens.input]}
          placeholder='Email'
          value={userCtx.user.email}
          keyboardType='email-address'
          onChangeText={changeEmailHandler}
        />
        <View style={[screens.nextButtonContainer]}>
          <Button
            title='Next'
            color={colors.color}
            onPress={nextButtonHandler}
          />
        </View>
        {!userCtx.user.emValid && <Text style={screens.error}>Fix Errors</Text>}
      </View>
    </View>
  );
}

export default EmailScreen;
