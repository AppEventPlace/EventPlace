import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface NameProps {
  name: string;
}

const Name: React.FC<NameProps> = ({ name }) => (
  <Text style={styles.text}>{name}</Text>
);

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: '#333',
  },
});

export default Name;
