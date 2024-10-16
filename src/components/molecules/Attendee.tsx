import React from 'react';
import { View } from 'react-native';
import Avatar from '../atoms/Avatar';
import Name from '../atoms/Name';

interface AttendeeProps {
  name: string;
  photoUrl: string;
}

const Attendee: React.FC<AttendeeProps> = ({ name, photoUrl }) => (
  <View
    style={{
      alignItems: 'center',
      margin: 10,
      marginTop: 20,
    }}
  >
    <Avatar source={photoUrl} />
    <Name name={name} />
  </View>
);

export default Attendee;
