import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface NavButtonProps {
  title: string;
  onPress: () => void;
}

const NavButton: React.FC<NavButtonProps> = ({ title, onPress }) => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
    <View style={styles.underline} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  button: {
    width: '100%',
    paddingVertical: 10,
    backgroundColor: 'transparent',
  },
  title: {
    color: '#6979F8',
    textAlign: 'center',
  },
  underline: {
    height: 2,
    backgroundColor: '#6979F8',
    width: '100%',
    marginTop: 5,
  },
});

export default NavButton;
