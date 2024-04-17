import React from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Boton from "../../components/Button";

const Gustos = ({ navigation }) => {
  return (
    <View style={style.PerfilContainer}>
      <SafeAreaView>
        <ScrollView>
          <Text style={style.TermsTitle}>
            Términos y condiciones Tratamiento de datos personales
          </Text>
          <View style={style.TermsContainer}>
            <Text style={style.TexStyle}>
              Lorem ipsum dolor sit amet consectetur. Sed ornare fames etiam
              mauris in id facilisi. Id purus aliquam at nibh. Sit gravida nec
              risus posuere. Eu bibendum suspendisse sed aliquam quis cras.
              Scelerisque amet erat pharetra sem vitae. Amet velit amet eget
              feugiat justo velit enim vitae. Sodales sapien ipsum sed eget eu
              amet. Molestie dictumst velit sem mauris id. Viverra in arcu eget
              adipiscing hendrerit. Pharetra sollicitudin mauris placerat
              molestie. Nibh pellentesque cursus suscipit nisi turpis felis
              mauris. Nibh nullam at sed tortor tortor. Aenean sit tempor amet
              faucibus. Amet cursus molestie malesuada pretium consequat purus.
              Porttitor pulvinar risus magnis tellus interdum. Dui libero diam
              cras feugiat pellentesque a posuere pulvinar. Viverra quam semper
              ullamcorper commodo at id vulputate tortor vulputate. Sed
              elementum sem volutpat purus sit at malesuada. Massa in adipiscing
              viverra sit sagittis. Nibh in enim turpis ut scelerisque. Mattis
              mauris elementum tortor enim sit id. Consequat elementum id amet
              risus libero sem. Porttitor ornare quis odio egestas elementum
              mauris mattis. Sed lacus nunc cursus non morbi vel et aliquet
              egestas. Varius viverra nec augue cursus auctor purus. Porttitor
              pulvinar risus magnis tellus interdum. ornare quis odio egestas
              elementum mauris mattis. Sed lacus nunc cursus non morbi vel et
              aliquet egestas. Varius viverra nec augue cursus auctor purus.
            </Text>
            <View style={style.ButonMarginTop}>
              <Boton
                label="Aceptar"
                theme="StyleBoton1"
                onPress={() => navigation.navigate("Crea tu cuenta")}
              />
              <Boton
                label="Cancelar"
                theme="StyleBoton2"
                onPress={() => navigation.navigate("Crea tu cuenta")}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const style = StyleSheet.create({
  PerfilContainer: {
    backgroundColor: "#F4F5FE",
    width: "100%",
    height: "100%",
    paddingHorizontal: 16,
    //justifyContent: "center",
  },
  TermsTitle: {
    marginTop: 70,
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: 0.005,
    color: "#515EC0",
  },
  TermsContainer: {
    flex: 1,
    marginTop: 16,
    paddingHorizontal: 16,
    paddingVertical: 24,
    width: "100%",
    backgroundColor: "#FBFBFE",
    //borderWidth: 3,
    elevation: 1,
    borderRadius: 12,
    alignItems: "center",
  },
  TexStyle: {
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: 0.01,
    color: "#0F172A",
    marginBottom: 50,
  },
  ButonMarginTop: {
    rowGap: 24,
  },
});

export default Gustos;
