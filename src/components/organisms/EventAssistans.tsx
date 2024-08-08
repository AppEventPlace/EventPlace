import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from '@rneui/themed'; 
import Attendee from '../molecules/Attendee';

interface EventAssistantsProps {
  title: string;
  assistants: { name: string; photoUrl: string }[];
  backgroundColor?: string;
  borderColor?: string;
}

const EventAssistants: React.FC<EventAssistantsProps> = ({
  title,
  assistants,
  backgroundColor,
  borderColor
}) => (
  <Card
    containerStyle={{
      backgroundColor: backgroundColor,
      borderColor: borderColor
    }}
  >
    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
      {title}
    </Text>
    <ScrollView
      horizontal
      contentContainerStyle={{ flexDirection: 'row' }}
      showsHorizontalScrollIndicator={true}
    >
      {assistants.map((assistant, index) => (
        <Attendee key={index} name={assistant.name} photoUrl={assistant.photoUrl} />
      ))}
    </ScrollView>
  </Card>
);

export default EventAssistants;
