import React from 'react';
import { View } from 'react-native';
import { Avatar as RNEAvatar } from 'react-native-elements';

interface AvatarProps {
  source: string;
  size?: number;
}

const Avatar: React.FC<AvatarProps> = ({ source, size = 50 }) => (
  <View
    style={{
      width: size,
      height: size,
      borderRadius: size / 2,
      overflow: 'hidden',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <RNEAvatar
      source={{ uri: source }}
      size={size}
      containerStyle={{
        width: size,
        height: size,
        borderRadius: size / 2,
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 0.5, 
        shadowRadius: 3, 
        elevation: 4,
      }}
      avatarStyle={{
        width: '100%',
        height: '100%',
        borderRadius: size / 2,
      }}
    />
  </View>
);

export default Avatar;
