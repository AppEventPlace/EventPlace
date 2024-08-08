import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import Icono from '../atoms/Icono';

interface MessageInputProps {
  onSendPress: () => void;
  containerBackgroundColor?: string; 
  inputBorderColor?: string;          
  inputBackgroundColor?: string;      
  inputTextColor?: string;          
}

const MessageInput: React.FC<MessageInputProps> = ({
  onSendPress,
  containerBackgroundColor = '#6979F8',
  inputBorderColor = '#ddd',
  inputBackgroundColor = '#FFFFFF',
  inputTextColor = '#000000',
}) => (
  <View style={{ backgroundColor: containerBackgroundColor, flexDirection: 'row', alignItems: 'center', padding: 10 }}>
    <TextInput 
      placeholder="Escribe un mensaje..." 
      style={{ 
        flex: 1, 
        borderWidth: 1, 
        borderColor: inputBorderColor, 
        borderRadius: 4, 
        padding: 10,
        backgroundColor: inputBackgroundColor,
        color: inputTextColor, 
      }}
    />
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Icono 
        iconName="add" 
        onPress={() => {}}
        colorIcon='#6979F8' 
      />
      <Icono 
        iconName="send" 
        onPress={onSendPress} 
        colorIcon='#6979F8' 
      />
    </View>
  </View>
);

export default MessageInput;
