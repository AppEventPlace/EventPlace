import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const WallScreen =()=> {
 
    return (
      <View style={style.PerfilContainer}>
        <Text> Wall </Text>
      </View>
    );
}

const style = StyleSheet.create({
    PerfilContainer:{
       backgroundColor: "#666666",
    },
});

export default WallScreen;