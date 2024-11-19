import React from 'react';
import { View, Text, TouchableOpacity, GestureResponderEvent } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface BackButtonProps {
  onPress: () => void;
  iconName: string;        
  title?: string;
  backgroundColor?: string;           
  IconColor?: string;          
  borderColor?: string;    
  textColor?: string;   
  fontSize?: number;     
}

const IconButton: React.FC<BackButtonProps> = ({
  onPress,
  iconName = 'chevron-back',
  title = 'Default',
  IconColor = '#000000',
  backgroundColor = 'transparent',
  borderColor = 'transparent',
  textColor = '#000000',
  fontSize = 16,
      
}) => (
  <View style={{ width: '100%', top: 0, padding: 10 }}>
    <TouchableOpacity
      style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: backgroundColor, borderColor: borderColor, borderWidth: 1 }}
      onPress={onPress}
    >
      <Icon name={iconName} size={24} color={IconColor} />
      <Text style={{ color: textColor, fontSize: fontSize, marginLeft: 8 }}>
        {title}
      </Text>
    </TouchableOpacity>
  </View>
);

export default IconButton;
