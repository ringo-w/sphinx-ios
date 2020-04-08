import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  title: {
    color: '#2C325B',
    fontSize: 16,
    lineHeight: 24,
    paddingLeft: 24,
  },
  description: {
    color: '#6B708C',
    fontSize: 14,
    lineHeight: 21,
    marginTop: 15,
    marginBottom: 20,
    paddingLeft: 24,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Dimensions.get('window').width,
    paddingRight: 24,
  },
});

export default styles;
