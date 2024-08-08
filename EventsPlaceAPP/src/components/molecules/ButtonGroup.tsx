import React from 'react';
import { View, StyleSheet } from 'react-native';
import IconButton from '../atoms/IconButton';

const ButtonGroup: React.FC = () => (
  <View style={styles.container}>
    <IconButton iconName="add" onPress={() => console.log('Add pressed')} />
    <IconButton iconName="send" onPress={() => console.log('Send pressed')} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default ButtonGroup;
