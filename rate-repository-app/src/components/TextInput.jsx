/* eslint-disable no-unused-vars */
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    errorInput: {
        borderColor: '#d73a4a',
        borderWidth: 1, 
      },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style, error && styles.errorInput];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;