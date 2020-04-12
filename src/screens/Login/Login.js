import React from 'react';
import {View, Text, Button} from 'react-native';
import styles from './styles';

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
      <Button
        onPress={() => navigation.navigate('Support')}
        title="Go to Support screen"
      />
      <Button
        onPress={() => navigation.navigate('Transactions')}
        title="Go to Transactions"
      />
    </View>
  );
};

export default Login;
