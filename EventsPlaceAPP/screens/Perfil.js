import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

 const PerfilScreen=()=> {
 
    return (
      <View style={style.PerfilContainer}>
        <Text> Perfil </Text>
      </View>
    );
}

const style = StyleSheet.create({
    PerfilContainer:{
       backgroundColor: "#666666",
    },
});
export default PerfilScreen;