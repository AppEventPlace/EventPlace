import React from 'react';
import { View, StyleSheet } from 'react-native';
import TextInputField from '../atoms/TextInputField';
import ButtonGroup from '../molecules/ButtonGroup';

const MessageInput: React.FC = () => (
  <View style={styles.container}>
    <TextInputField placeholder="Escribe un mensaje..." />
    <ButtonGroup />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
});

export default MessageInput;
