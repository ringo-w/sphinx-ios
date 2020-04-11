import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import {StackActions} from '@react-navigation/native';

export const sharedScreenOptions = (props) => ({
  headerBackTitleVisible: false,
  headerTitleStyle: {
    fontFamily: 'GTWalsheimPro-Regular',
    fontSize: 18,
    lineHeight: 27,
    color: '#202442',
  },
  headerStyle: {shadowColor: 'transparent'},
  headerBackImage: () => (
    <Image
      source={require('../assets/icons/left.png')}
      style={styles.backArrow}
    />
  ),
  headerRight: () =>
    props.route.name === 'Support' ? (
      <TouchableOpacity
        style={styles.menuButton}
        underlayColor={'transparent'}
        onPress={() => props.navigation.dispatch(StackActions.popToTop())}>
        <Image
          source={require('../assets/icons/closeNav.png')}
          style={styles.closeButton}
        />
      </TouchableOpacity>
    ) : null,
});
