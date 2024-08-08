import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface IconButtonProps {
  iconName: string;
  onPress: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({ iconName, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Icon name={iconName} size={24} color="#6979F8" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    marginLeft: 10,
    padding: 10,
  },
});

export default IconButton;
