import React, { ReactNode } from 'react';
import { View } from 'react-native';
import NavMenu from '../molecules/NavMenu';

interface NavigationContainerProps {
  menuButtons: { title: string; onPress: () => void }[];
  children?: ReactNode;
}

const NavigationContainer: React.FC<NavigationContainerProps> = ({ menuButtons, children }) => (
  <View style={{ flex: 1 }}>
    <View style={{ margin: 10, padding: 10, backgroundColor: 'transparent' }}>
      <NavMenu buttons={menuButtons} />
    </View>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {children}
    </View>
  </View>
);

export default NavigationContainer;
