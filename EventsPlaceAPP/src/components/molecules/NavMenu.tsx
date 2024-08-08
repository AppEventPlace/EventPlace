import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import NavButton from '../atoms/NavButton';

interface NavMenuProps {
  buttons: { title: string; onPress: () => void; active?: boolean }[];
}

const NavMenu: React.FC<NavMenuProps> = ({ buttons }) => {
  const buttonCount = buttons.length;
  const buttonWidth = 100 / buttonCount;

  return (
    <View style={{ flexDirection: 'row', flex: 1 }}>
      {buttons.map((button, index) => (
        <View
          key={index}
          style={{ width: `${buttonWidth}%`, justifyContent: 'center' }}
        >
          <NavButton
            title={button.title}
            onPress={button.onPress}
            active={true}
          />
        </View>
      ))}
    </View>
  );
};

export default NavMenu;
