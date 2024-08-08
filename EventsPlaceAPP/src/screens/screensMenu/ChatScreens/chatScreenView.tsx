import React from 'react';
import { View, SafeAreaView } from 'react-native';
import NavigationScreens from '../../../components/organisms/NavigationScreens';
import MessageInput from '../../../components/organisms/MessageInput';

import { useNavigation } from '@react-navigation/native';
import EventAssistants from '@/components/organisms/EventAssistans';
import IconButton from '@/components/atoms/IconButton';

const assistants = [
  { name: 'Alexander Hamilton Alexander Hamilton', photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHPuXM85d8UIGI9Pf0mv3ek_EYAzHOzu_7Zw&s' },
  { name: 'Elizabeth Bennet', photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVKpkkOyD3T5ABULBihOhWv1YuC1lgUYrJDw&s' },
  { name: 'Benjamin Franklin', photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGXC623IXvv6Z0atJJiSDFWh0HfMmHdh8KuA&s' },
  { name: 'Charlotte Brontë', photoUrl: 'https://img.freepik.com/fotos-premium/hotel-zona-relajacion-hermosa-mujer-madura-cuidado-piel-antes-despues-procedimientos-spa-bienestar-feliz_1019437-5494.jpg' },
  { name: 'Nathaniel Hawthorne', photoUrl: 'https://media.gq.com.mx/photos/609c0fdeee4372271f0b9056/1:1/w_2000,h_2000,c_limit/salir%20guapo%20en%20fotos-605380757.jpg' },
  { name: 'Virginia Woolf', photoUrl: 'https://pics.craiyon.com/2023-09-27/64dc395ec9e04f0e95afdc2d982b1d22.webp' }
];

const ChatScreenView: React.FC = () => {
  const navigation = useNavigation<any>();

  const menuButtons = [
    { title: 'Chat', onPress: () => navigation.navigate('Chat') },
    { title: 'Photos & Videos', onPress: () => navigation.navigate('PhotosVideos') }
  ];

  return (
    <SafeAreaView>
      <View>
        <View>
          <IconButton
            onPress={() => console.log('Back pressed')}
            iconName='chevron-back'
            title='Volver'
            IconColor='#000000'
            backgroundColor='transparent'
            borderColor='transparent'
            textColor='#000000'
          />
        </View>
        <View>
        </View>
        <View>
          <NavigationScreens menuButtons={menuButtons} />
        </View>
        <View>
          <EventAssistants
            title="Asistentes del Evento"
            assistants={assistants}
            backgroundColor='rgba(244, 245, 254, 0)'
            borderColor='rgba(244, 245, 254, 0)'
          />
        </View>
        <View>
          <MessageInput
            onSendPress={() => { }}
            containerBackgroundColor='#F4F5FE'
            inputBorderColor='#ddd'
            inputBackgroundColor='#FFFFFF'
            inputTextColor='#000000'
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ChatScreenView;
