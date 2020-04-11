import React from 'react';
import {View, Image} from 'react-native';
import AppText from '../../components/AppText';
import styles from './styles';

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Image
          source={require('../../assets/images/users/toby.png')}
          style={styles.image}
        />
        <View style={styles.btcBorder}>
          <View style={styles.btcDisplay}>
            <AppText style={styles.btc}>3.034 BTC</AppText>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Profile;
