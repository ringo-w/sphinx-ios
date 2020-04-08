import React, {Component} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  LayoutAnimation,
  UIManager,
  Platform,
  Animated,
} from 'react-native';
import AppText from '../AppText';
import PropTypes from 'prop-types';
import styles from './styles';

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

class FAQAnimation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      rotate: new Animated.Value(0),
    };
  }

  rotate = () => {
    this.state.rotate.setValue(0);
    Animated.timing(this.state.rotate, {
      toValue: 1,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  toggle = () => {
    LayoutAnimation.Presets.easeInEaseOut;
    this.setState({toggle: !this.state.toggle});
    this.rotate();
  };

  render() {
    const {data} = this.props;
    const SpinForward = this.state.rotate.interpolate({
      inputRange: ['0', '1'],
      outputRange: ['0deg', '180deg'],
    });
    const SpinBackward = this.state.rotate.interpolate({
      inputRange: ['0', '1'],
      outputRange: ['0deg', '-180deg'],
    });
    return (
      <View>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            this.toggle();
          }}>
          {this.state.toggle ? (
            <View>
              <View style={styles.container}>
                <AppText style={styles.title}>{data.title}</AppText>
                <Animated.View style={{transform: [{rotate: SpinForward}]}}>
                  <Image source={require('../../assets/icons/close.png')} />
                </Animated.View>
              </View>
              <AppText style={styles.description}>{data.description}</AppText>
            </View>
          ) : (
            <View style={[styles.container, styles.bottomBorder]}>
              <AppText style={styles.title}>{data.title}</AppText>
              <Animated.View style={{transform: [{rotate: SpinBackward}]}}>
                <Image source={require('../../assets/icons/plus.png')} />
              </Animated.View>
            </View>
          )}
        </TouchableOpacity>
      </View>
    );
  }
}

FAQAnimation.propTypes = {
  data: PropTypes.object.isRequired,
};

export default FAQAnimation;
