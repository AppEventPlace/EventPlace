import React from 'react';
import { View, Dimensions } from 'react-native';
import NavButton from '../atoms/NavButton';

interface NavMenuProps {
  buttons: { title: string; onPress: () => void }[];
}

const NavMenu: React.FC<NavMenuProps> = ({ buttons }) => {
  const buttonCount = buttons.length;
  const buttonWidth = 100 / buttonCount; // Calculate width percentage based on button count

  return (
    <View style={{ flexDirection: 'row', flex: 1 }}>
      {buttons.map((button, index) => (
        <View key={index} style={{ width: `${buttonWidth}%` }}>
          <NavButton title={button.title} onPress={button.onPress} />
        </View>
      ))}
    </View>
  );
};

export default NavMenu;
