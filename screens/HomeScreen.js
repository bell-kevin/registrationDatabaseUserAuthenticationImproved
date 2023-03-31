import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function HomeScreen() {
  const navigation = useNavigation();

  function screenPressHandler(screenName) {
    navigation.navigate(screenName);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Account Registration</Text>
      <View style={styles.buttonContainer}>
        <Button
          title='Begin'
          color='indianred'
          onPress={() => screenPressHandler('Name')}
        />
      </View>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gainsboro',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 22,
  },
  buttonContainer: {
    width: '40%',
    marginTop: 32,
  },
});
