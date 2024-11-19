import React from 'react';
import { Text } from 'react-native-elements';

interface NameProps {
  name: string;
}

const Name: React.FC<NameProps> = ({ name }) => {
  const truncatedName = name.length > 15 ? name.substring(0, 15) + '...' : name;

  return (
    <Text
      style={{
        fontSize: 16,
        color: '#333',
        flexShrink: 1,  
        alignSelf: 'flex-end',
        width: '100%', 
        flexWrap: 'wrap', 
      }}
    >
      {truncatedName}
    </Text>
  );
};

export default Name;
