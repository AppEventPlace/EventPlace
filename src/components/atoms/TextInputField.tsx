import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

interface TextInputFieldProps {
  placeholder?: string;
}

const TextInputField: React.FC<TextInputFieldProps> = ({ placeholder }) => (
  <TextInput
    style={styles.input}
    placeholder={placeholder}
  />
);

const styles = StyleSheet.create({
  input: {
    flex: 1,
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: '#FFFFFF'
  },
});

export default TextInputField;
