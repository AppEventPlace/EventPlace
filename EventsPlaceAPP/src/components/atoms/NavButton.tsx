import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';

interface NavButtonProps {
  title: string;
  onPress: () => void;
}

const NavButton: React.FC<NavButtonProps> = ({ title, onPress }) => (
  <View style={{ alignItems: 'center' }}>
    <Button
      title={title}
      onPress={onPress}
      type="clear" 
      containerStyle={{ width: '100%' }}
      buttonStyle={{ backgroundColor: 'transparent' }}
      titleStyle={{ color: '#6979F8' }}
    />
    <View style={{ height: 2, backgroundColor: '#6979F8', width: '100%', marginTop: 5 }} />
  </View>
);

export default NavButton;
