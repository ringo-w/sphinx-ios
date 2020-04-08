import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Dimensions.get('window').width * 0.87,
    paddingTop: 14,
    paddingBottom: 19,
    marginLeft: 24,
    borderTopWidth: 1,
    borderColor: 'rgba(192, 194, 206, 0.2)',
  },
  title: {
    color: '#2C325B',
    fontSize: 16,
    lineHeight: 24,
    // paddingLeft: 24,
  },
  description: {
    color: '#6B708C',
    fontSize: 14,
    lineHeight: 21,
    marginBottom: 20,
    paddingLeft: 24,
  },
  bottomBorder: {
    borderBottomWidth: 1,
    borderColor: 'rgba(192, 194, 206, 0.2)',
  },
});

export default styles;
