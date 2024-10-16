import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const NotificacionesScreen = ()=> {
 
    return (
      <View style={style.PerfilContainer}>
        <Text> Notificaciones </Text>
      </View>
    );
}

const style = StyleSheet.create({
    PerfilContainer:{
       backgroundColor: "#666666",
    },
});
export default NotificacionesScreen;