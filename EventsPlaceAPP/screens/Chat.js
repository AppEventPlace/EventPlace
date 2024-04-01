import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const ChatScreen =() => {
 
    return (
      <View style={style.PerfilContainer}>
        <Text> Chat </Text>
      </View>
    );
}

const style = StyleSheet.create({
    PerfilContainer:{
       backgroundColor: "#666666",
    },
});
export default ChatScreen;