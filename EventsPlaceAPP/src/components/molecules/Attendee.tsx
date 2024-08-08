// Attendee.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Avatar from '../atoms/Avatar';
import Name from '../atoms/Name';

interface AttendeeProps {
  name: string;
  photoUrl: string;
}

const Attendee: React.FC<AttendeeProps> = ({ name, photoUrl }) => (
  <View style={styles.container}>
    <Avatar source={photoUrl} />
    <Name name={name} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center', 
    marginBottom: 20, 
    margin: 20,
  },
})

export default Attendee;
