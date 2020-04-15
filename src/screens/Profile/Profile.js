import React from 'react';
import {
  ScrollView,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
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
        <View style={styles.wallet}>
          <TextInput style={styles.address} placeholder="Node Address" />
          <TouchableOpacity>
            <Image source={require('../../assets/icons/scancode.png')} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;
