import React from 'react';
import { View, StyleSheet } from 'react-native';
import NavButton from '../atoms/NavButton';

interface NavMenuProps {
  buttons: { title: string; onPress: () => void }[];
}

const NavMenu: React.FC<NavMenuProps> = ({ buttons }) => {
  const buttonCount = buttons.length;
  const buttonWidth = 100 / buttonCount;

  return (
    <View style={styles.container}>
      {buttons.map((button, index) => (
        <View key={index} style={[styles.buttonWrapper, { width: `${buttonWidth}%` }]}>
          <NavButton title={button.title} onPress={button.onPress} />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
  },
  buttonWrapper: {
    justifyContent: 'center',
  },
});

export default NavMenu;
