import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#FFF'},
  avatar: {alignItems: 'center'},
  image: {
    borderRadius: 75,
    marginTop: '15.52%',
  },
  btcBorder: {
    width: 87,
    height: 36,
    marginTop: '-8.17%',
    backgroundColor: '#FFF',
    borderRadius: 30,
    zIndex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btcDisplay: {
    backgroundColor: '#6977F7',
    borderRadius: 30,
    width: 79,
    height: 28,
    justifyContent: 'center',
  },
  btc: {
    fontSize: 12,
    color: '#FFF',
    textAlign: 'center',
  },
  form: {
    flex: 1,
    width: '87.2%',
    alignSelf: 'center',
    paddingTop: 50,
  },
  text: {
    fontFamily: 'GTWalsheimPro-Regular',
    fontSize: 16,
    color: '#202442',
    borderBottomWidth: 1,
    borderColor: '#E4E8EE',
    lineHeight: 21,
    paddingBottom: 9,
    paddingTop: 25,
  },
  wallet: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#E4E8EE',
    lineHeight: 21,
    paddingBottom: 9,
    paddingTop: 25,
  },
  address: {
    fontFamily: 'GTWalsheimPro-Regular',
    fontSize: 16,
    color: '#202442',
  },
});
export default styles;
