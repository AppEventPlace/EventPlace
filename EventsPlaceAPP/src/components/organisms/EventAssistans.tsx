// EventAssistants.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Attendee from '../molecules/Attendee';

interface EventAssistantsProps {
  title: string;
  assistants: { name: string; photoUrl: string }[];
}

const EventAssistants: React.FC<EventAssistantsProps> = ({ title, assistants }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <ScrollView
      horizontal
      contentContainerStyle={styles.scrollContainer}
      showsHorizontalScrollIndicator={true}
    >
      {assistants.map((assistant, index) => (
        <Attendee key={index} name={assistant.name} photoUrl={assistant.photoUrl} />
      ))}
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  scrollContainer: {
    flexDirection: 'row',
  },
});

export default EventAssistants;
