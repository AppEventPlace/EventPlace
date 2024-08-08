import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, GestureResponderEvent } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface BackButtonProps {
  onPress: (event: GestureResponderEvent) => void;
}

const BackButton: React.FC<BackButtonProps> = ({ onPress }) => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Icon name="chevron-back" size={24} color="#000000" /> 
      <Text style={styles.text}>Volver</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'flex-start',
    padding: 10,
    position: 'absolute',
    top: 0,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    padding: 10,
  },
  text: {
    color: '#000000', 
    fontSize: 16,
    marginLeft: 8,
  },
});

export default BackButton;
