import React from "react";
import { Text, View, Image, Pressable } from "react-native";
import CommonTextStyles from "../components/CommonStyles/CommonTextStyles";
import { Colors } from "../components/CommonStyles/CommonStyles";

const TarjetaWall = ({
  source,
  Titulo,
  fecha,
  ubicacion,
  Descripcion,
  theme,
  onPress,
}) => {
  switch (theme) {
    case "Vertical":
      return (
        <View
          style={{
            //width: "55%",
            borderRadius: 12,
            height: 370,
            maxWidth: 179,
            marginHorizontal: 5,
            backgroundColor: "#FBFBFB",
            elevation: 2,
            marginBottom: 15,
            shadowColor: "#000", // -->  Sombra
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,
          }}
        >
          <Pressable
            style={({ pressed }) => [
              { backgroundColor: pressed ? Colors.Grey_300 : null },
              { width: "100%", height: "100%", borderRadius: 12 },
            ]}
            onPress={onPress}
          >
            <View
              style={{
                //width: "45%",
                width: "100%",
                height: 152,
                maxWidth: 179,
                alignSelf: "center",
                borderRadius: 12,
              }}
            >
              <Image
                key={"ImagenCategoria"}
                //Pase el URI de la imagen seleccionada al componente ImageViewer.
                source={source}
                style={{
                  borderTopLeftRadius: 12,
                  borderTopRightRadius: 12,
                  width: "100%",
                  maxWidth: 179,
                  height: 152,
                }}
              />
            </View>
            <View
              style={{ width: "95%", marginTop: 15, marginLeft: 7, height: 40 }}
            >
              <Text
                style={[CommonTextStyles.SemiBold_M, { color: Colors.Negro }]}
              >
                {Titulo}
              </Text>
            </View>
            <View style={{ width: "95%", marginTop: 10, marginLeft: 7 }}>
              <Text style={[CommonTextStyles.Body_S, { color: Colors.Negro }]}>
                {fecha}
              </Text>
            </View>
            <View style={{ width: "95%", marginTop: 15, marginLeft: 7 }}>
              <Text
                style={[CommonTextStyles.Body_XS, { color: Colors.Grey_Soft }]}
              >
                {ubicacion}
              </Text>
            </View>
            <View
              style={{
                width: "100%",
                marginTop: 10,
                paddingHorizontal: 7,
                flexDirection: "row",
                height: "25%",
                marginBottom: 10,
                flexShrink: 1,
                alignItems: "center",
              }}
            >
              <Text
                style={[
                  CommonTextStyles.Body_XS,
                  {
                    color: Colors.Grey_07,
                    flexShrink: 1,
                    textAlign: "auto",
                    letterSpacing: 0.015,
                  },
                ]}
              >
                {Descripcion}
              </Text>
            </View>
          </Pressable>
        </View>
      );
    case "Horizontal":
      return (
        <View
          style={{
            //width: "95%",
            borderRadius: 12,
            height: 193,
            maxWidth: 400,
            //marginHorizontal: 15,
            backgroundColor: "#FBFBFB",
            elevation: 2,
            marginBottom: 15,
            display: "flex",
            flexDirection: "row",
            shadowColor: "#000", // -->  Sombra
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,
            //marginHorizontal: 16,
          }}
        >
          <Pressable
            style={({ pressed }) => [
              { backgroundColor: pressed ? Colors.Grey_300 : null },
              {
                width: "100%",
                height: "100%",
                maxWidth: 400,
                display: "flex",
                flexDirection: "row",
                borderRadius: 12,
              },
            ]}
            onPress={onPress}
          >
            <View
              style={{
                //width: "45%",
                //width: "30%",
                maxWidth: 90,
                height: 193,
                maxWidth: 179,
                alignSelf: "center",
                borderRadius: 12,
              }}
            >
              <Image
                key={"ImagenCategoria"}
                //Pase el URI de la imagen seleccionada al componente ImageViewer.
                source={source}
                style={{
                  borderTopLeftRadius: 12,
                  borderBottomLeftRadius: 12,
                  //width: "30%",
                  maxWidth: 90,
                  height: 193,
                }}
              />
            </View>
            <View
              style={{
                width: "75%",
                paddingHorizontal: 16,
                height: 193,

                paddingVertical: 16,
              }}
            >
              <View style={{ width: "95%", marginTop: 5 }}>
                <Text
                  style={[CommonTextStyles.SemiBold_M, { color: Colors.Negro }]}
                >
                  {Titulo}
                </Text>
              </View>
              <View style={{ width: "95%", marginTop: 30 }}>
                <Text
                  style={[CommonTextStyles.Body_S, { color: Colors.Negro }]}
                >
                  {fecha}
                </Text>
              </View>
              <View style={{ width: "95%", marginTop: 15 }}>
                <Text
                  style={[
                    CommonTextStyles.Body_XS,
                    { color: Colors.Grey_Soft },
                  ]}
                >
                  {ubicacion}
                </Text>
              </View>
              <View
                style={{
                  //height: 60,
                  marginTop: 10,
                  //marginHorizontal: 15,
                  //marginBottom: 10,

                  width: "98%",

                  //flexDirection: "row",
                  flexShrink: 1,
                  //justifyContent: "center",
                }}
              >
                <Text
                  style={[
                    CommonTextStyles.Body_XS,
                    {
                      color: Colors.Grey_07,
                      flexShrink: 1,
                      textAlign: "auto",
                      letterSpacing: 0.015,
                    },
                  ]}
                >
                  {Descripcion}
                </Text>
              </View>
            </View>
          </Pressable>
        </View>
      );
  }
};
export default TarjetaWall;
