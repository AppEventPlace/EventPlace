import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import NavigationScreens from '../../../components/organisms/NavigationScreens';
import BackButton from '../../../components/atoms/BackButton'; 
import MessageInput from '../../../components/organisms/MessageInput'; 
import EventAssistants from '@/components/organisms/EventAssistans';

const assistants = [
  { name: 'Alexander Hamilton', photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHPuXM85d8UIGI9Pf0mv3ek_EYAzHOzu_7Zw&s' },
  { name: 'Elizabeth Bennet', photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVKpkkOyD3T5ABULBihOhWv1YuC1lgUYrJDw&s' },
  { name: 'Benjamin Franklin', photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGXC623IXvv6Z0atJJiSDFWh0HfMmHdh8KuA&s' },
  { name: 'Charlotte Brontë', photoUrl: 'https://img.freepik.com/fotos-premium/hotel-zona-relajacion-hermosa-mujer-madura-cuidado-piel-antes-despues-procedimientos-spa-bienestar-feliz_1019437-5494.jpg' },
  { name: 'Nathaniel Hawthorne', photoUrl: 'https://media.gq.com.mx/photos/609c0fdeee4372271f0b9056/1:1/w_2000,h_2000,c_limit/salir%20guapo%20en%20fotos-605380757.jpg' },
  { name: 'Virginia Woolf', photoUrl: 'https://pics.craiyon.com/2023-09-27/64dc395ec9e04f0e95afdc2d982b1d22.webp' }
];

const ChatScreenView: React.FC = () => {
  const menuButtons = [
    { title: 'Chat', onPress: () => console.log('Chat clicked') },
    { title: 'Photos & Videos', onPress: () => console.log('Photos & Videos clicked') }
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.backButtonContainer}>
          <BackButton onPress={() => console.log('Back pressed')} />
        </View>
        <View style={styles.navigationContainer}>
          <NavigationScreens
            menuButtons={menuButtons}
            backButton={undefined}
          >
            <EventAssistants title="Asistentes del Evento" assistants={assistants} />
          </NavigationScreens>
        </View>
        <View style={styles.messageInputContainer}>
          <MessageInput />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  backButtonContainer: {
    width: '100%',
    position: 'absolute',
    top: 0,
    zIndex: 1, 
  },
  navigationContainer: {
    flex: 1,
    paddingTop: 50, 
  },
  messageInputContainer: {
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    width: '100%',
    backgroundColor: '#F4F5FE', 
  },
});

export default ChatScreenView;
