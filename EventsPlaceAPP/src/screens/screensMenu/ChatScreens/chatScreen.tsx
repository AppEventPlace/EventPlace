import React from "react";
import { View } from "react-native";
import ChatScreenView from "./chatScreenView";

const ChatScreen: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <ChatScreenView />
    </View>
  );
};

export default ChatScreen;
