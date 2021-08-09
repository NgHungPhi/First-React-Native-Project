import {StyleSheet} from 'react-native';
import colors from '../../../assets/theme/colors';
export default StyleSheet.create({
  inputContainer: {
    paddingVertical: 12,
  },
  wrapper: {
    height: 42,
    borderWidth: 1,
    borderRadius: 4,
    flexDirection: 'row',
    paddingHorizontal: 5,
    marginTop: 7,
  },
  textInput: {
    flex: 1,
  },
  error: {
    color: colors.danger,
    marginTop: 5,
    fontSize: 12,
  },
});
