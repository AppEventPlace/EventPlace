import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import Boton from "../../components/Button";
import { SafeAreaView } from "react-native-safe-area-context";

const EditarPerfilScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView style={style.PerfilContainer}>
        <View>
          <View style={style.HeaderContainer}>
            <Boton
              theme="BackCheckron"
              label="Atras"
              onPress={() => navigation.navigate("Mi perfil")}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  PerfilContainer: {
    marginTop: 0,
    backgroundColor: "#F4F5FE",
    width: "100%", // Ancho de a imagen
    height: "100%", // Alto de la imagen
  },
  HeaderContainer: {
    marginTop: 10,
    width: "100%",
    height: 25,
    ////borderWidth: 1,
    //position: 'absolute',
  },
});

export default EditarPerfilScreen;
