import React from "react";
import { Text, View, Image, Pressable } from "react-native";

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
            width: "55%",
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
              { backgroundColor: pressed ? "#C6C7C8" : null },
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
                style={{
                  fontSize: 16,
                  fontWeight: "600",
                  color: "#0F172A",
                }}
              >
                {Titulo}
              </Text>
            </View>
            <View style={{ width: "95%", marginTop: 10, marginLeft: 7 }}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "500",
                  color: "#0F172A",
                }}
              >
                {fecha}
              </Text>
            </View>
            <View style={{ width: "95%", marginTop: 15, marginLeft: 7 }}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "500",
                  color: "#828282",
                }}
              >
                {ubicacion}
              </Text>
            </View>
            <View
              style={{
                width: "100%",
                marginTop: 10,
                marginHorizontal: 7,
                flexDirection: "row",
                height: "25%",
                marginBottom: 10,
                flexShrink: 1,
              }}
            >
              <Text
                style={{
                  //fontSize: 12,
                  fontWeight: "500",
                  color: "#333333",
                  lineHeight: 16,
                  flexShrink: 1,
                  textAlign: "auto",
                }}
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
              { backgroundColor: pressed ? "#C6C7C8" : null },
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
                width: "25%",
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
                marginRight: 10,
                height: 193,

                marginBottom: 10,
              }}
            >
              <View
                style={{ width: "95%", marginTop: 5, marginHorizontal: 15 }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "600",
                    color: "#0F172A",
                  }}
                >
                  {Titulo}
                </Text>
              </View>
              <View
                style={{ width: "95%", marginTop: 30, marginHorizontal: 15 }}
              >
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "500",
                    color: "#0F172A",
                  }}
                >
                  {fecha}
                </Text>
              </View>
              <View
                style={{ width: "95%", marginTop: 15, marginHorizontal: 15 }}
              >
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: "500",
                    color: "#828282",
                  }}
                >
                  {ubicacion}
                </Text>
              </View>
              <View
                style={{
                  //height: 60,
                  marginTop: 10,
                  marginHorizontal: 15,
                  marginBottom: 10,

                  //width: "95%",

                  //flexDirection: "row",
                  flexShrink: 1,
                }}
              >
                <Text
                  style={{
                    //fontSize: 12,
                    fontWeight: "500",
                    color: "#333333",
                    lineHeight: 16,
                    flexShrink: 1,
                  }}
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
