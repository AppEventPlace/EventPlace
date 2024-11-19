import React from 'react';
import { View } from 'react-native';
import NavMenu from '../molecules/NavMenu';

interface NavigationScreensProps {
  menuButtons: { title: string; onPress: () => void }[];
}

const NavigationScreens: React.FC<NavigationScreensProps> = ({ menuButtons }) => (
  <View style={{ flex: 1 }}>
    <View style={{ margin: 10, padding: 10, backgroundColor: 'transparent' }}>
      <NavMenu buttons={menuButtons} />
    </View>
  </View>
);

export default NavigationScreens;
