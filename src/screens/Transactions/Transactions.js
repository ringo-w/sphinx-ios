import React from 'react';
import {View, Image} from 'react-native';
import AppText from '../../components/AppText';
import styles from './styles';

const Transactions = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/Artboard.png')} />
      <View style={styles.message}>
        <AppText style={styles.alert}>No Transactions</AppText>
        <AppText style={styles.text}>
          Send or receive funds to receive the first transaction
        </AppText>
      </View>
    </View>
  );
};

export default Transactions;
