import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

interface IconButtonProps {
  iconName: string;
  onPress: () => void;
  colorIcon?: string;
  sizeIcon?: number;
}

const Icono: React.FC<IconButtonProps> = ({
  iconName,
  onPress,
  colorIcon = '#000000',
  sizeIcon = 24
}) => (
  <TouchableOpacity
    style={{ marginLeft: 10, padding: 10 }}
    onPress={onPress}
  >
    <Icon name={iconName} size={sizeIcon} color={colorIcon} />
  </TouchableOpacity>
);

export default Icono;
