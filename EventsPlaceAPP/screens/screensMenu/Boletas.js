import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

 const BoletasScreen =()=> {
 
    return (
      <View style={style.PerfilContainer}>
        <Text> Boletas </Text>
      </View>
    );
}

const style = StyleSheet.create({
    PerfilContainer:{
       backgroundColor: "#666666",
    },
});

export default BoletasScreen;