import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
} from "react-native";
import BackCheckron from "../../components/BackCheckron";
import Button from "../../components/Button";

const SearchPage = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ backgroundColor: "#032030", flex: 1 }}>
        <View style={style.PageContainer}>
          <View style={style.HeaderContainer}>
            <BackCheckron navigation={navigation} />
            <View
              key={"ContenedorNombrePrincipal"}
              style={{ alignSelf: "center", marginTop: 15 }}
            >
              <Text style={style.Titulo}>Buscar</Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                height: 41,
                width: "100%",
                maxWidth: 358,
                marginTop: 30,
              }}
            >
              <View
                style={{
                  borderRadius: 12,
                  borderWidth: 1,
                  backgroundColor: "#FBFBFE",
                  width: "85%",
                  borderColor: "#D0D4FC",
                  height: 41,
                }}
              >
                <TextInput
                  style={{ width: "90%", height: 41, marginHorizontal: 10 }}
                  placeholder="Busca tu evento"
                />
              </View>
              <View style={{ marginLeft: 5, width: 41, height: 41 }}>
                <Button theme={"SearchButton"} />
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};
const style = StyleSheet.create({
  PerfilContainer: {
    backgroundColor: "#666666",
    flex: 1,
  },
  HeaderContainer: {
    width: "100%",
    height: 60,
    ////borderWidth: 1,
    //position: 'absolute',
  },
  PageContainer: {
    marginTop: 30,
    backgroundColor: "#F4F5FE",
    height: "100%",
    paddingHorizontal: 16,
  },
  Titulo: {
    alignContent: "center",
    fontSize: 24,
    marginTop: 10,
    fontWeight: "700",
    color: "#515EC0",
  },
});

export default SearchPage;
