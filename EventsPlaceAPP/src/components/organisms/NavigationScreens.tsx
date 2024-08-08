// NavigationScreens.tsx
import React, { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';
import NavMenu from '../molecules/NavMenu';

interface NavigationScreensProps {
  menuButtons: { title: string; onPress: () => void }[];
  backButton: ReactNode; 
  children?: ReactNode;
}

const NavigationScreens: React.FC<NavigationScreensProps> = ({ menuButtons, backButton, children }) => (
  <View style={styles.container}>
    <View style={styles.menuContainer}>
      <NavMenu buttons={menuButtons} />
    </View>
    <View style={styles.backButtonContainer}>
      {backButton}
    </View>
    <View style={styles.contentContainer}>
      {children}
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menuContainer: {
    margin: 10,
    padding: 10,
    backgroundColor: 'transparent',
  },
  backButtonContainer: {
    padding: 10,
    position: 'absolute',
    top: 0,
    width: '100%',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
});

export default NavigationScreens;
