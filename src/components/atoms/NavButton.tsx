import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Divider } from 'react-native-elements';

interface NavButtonProps {
  title: string;
  onPress: () => void;
  active?: boolean;
}

const NavButton: React.FC<NavButtonProps> = ({ 
  title, 
  onPress, 
  active = false 
}) => (
  <View style={{ alignItems: 'center' }}>
    <TouchableOpacity
      style={{
        width: '100%',
        paddingVertical: 10,
        backgroundColor: 'transparent',
      }}
      onPress={onPress}
    >
      <Text
        style={{
          color: '#6979F8',
          textAlign: 'center',
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
    {active && (
      <Divider
        style={{
          height: 2,
          backgroundColor: '#6979F8',
          width: '100%',
          marginTop: 5,
        }}
      />
    )}
  </View>
);

export default NavButton;
