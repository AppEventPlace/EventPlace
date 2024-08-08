import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

interface AvatarProps {
  source: string; // URL o ruta local de la imagen
  size?: number;
}

const Avatar: React.FC<AvatarProps> = ({ source, size = 50 }) => (
  <View style={[styles.container, { width: size, height: size, borderRadius: size / 2 }]}>
    <Image source={{ uri: source }} style={[styles.image, { width: size, height: size, borderRadius: size / 2 }]} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default Avatar;
