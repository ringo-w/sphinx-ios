import React from 'react';
import {ScrollView, View, Image, TextInput} from 'react-native';
import AppText from '../../components/AppText';
import styles from './styles';

const Profile = () => {
  return (
    <ScrollView style={styles.container}>
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
      <View style={styles.form}>
        <TextInput style={styles.text} placeholder="Name" />
        <TextInput style={styles.text} placeholder="Email" />
        <TextInput style={styles.text} placeholder="Phone Number" />
        <TextInput style={styles.text} placeholder="BTC Wallet Address" />
      </View>
    </ScrollView>
  );
};

export default Profile;
