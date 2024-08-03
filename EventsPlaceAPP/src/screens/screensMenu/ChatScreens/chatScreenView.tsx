import React from 'react';
import { View } from 'react-native';
import Chat from './Chat/chat';
import PhotosVideos from './PhotosVideos/photosVideos';
import NavigationContainer from '../../../components/organisms/NavigationContainer';

const ChatScreenView: React.FC = () => {
  const menuButtons = [
    { title: 'Chat', onPress: () => console.log('Chat clicked') },
    { title: 'Photos & Videos', onPress: () => console.log('Photos & Videos clicked') }
  ];

  return (
    <NavigationContainer menuButtons={menuButtons}>
        <Chat />
        <PhotosVideos />
    </NavigationContainer>
  );
};

export default ChatScreenView;
