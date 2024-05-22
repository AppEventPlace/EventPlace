import React from "react";
import { Text, View, Image, Pressable } from "react-native";

const TarjetaWall = ({
  source,
  Titulo,
  fecha,
  ubicacion,
  Descripcion,
  theme,
}) => {
  switch (theme) {
    case "Vertical":
      return (
        <View
          style={{
            width: 160,
            borderRadius: 12,
            height: 359,
            maxWidth: 179,
            marginHorizontal: 5,
            backgroundColor: "#FBFBFB",
            elevation: 2,
            marginBottom: 15,
          }}
        >
          <Pressable
            style={({ pressed }) => [
              { backgroundColor: pressed ? "#C6C7C8" : null },
              { width: "100%", height: "100%", borderRadius: 12 },
            ]}
            onPress={() => alert("Ir a detalle de evento")}
          >
            <View
              style={{
                //width: "45%",
                width: 160,
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
                  width: 160,
                  maxWidth: 179,
                  height: 152,
                }}
              />
            </View>
            <View style={{ width: "95%", marginTop: 15, marginLeft: 7 }}>
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
            <View style={{ width: "95%", marginTop: 30, marginLeft: 7 }}>
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
            <View style={{ width: "100%", marginTop: 10, marginLeft: 7 }}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "500",
                  color: "#333333",
                  lineHeight: 16,
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
            width: "100%",
            borderRadius: 12,
            height: 193,
            maxWidth: 330,
            //marginHorizontal: 15,
            backgroundColor: "#FBFBFB",
            elevation: 2,
            marginBottom: 15,
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Pressable
            style={({ pressed }) => [
              { backgroundColor: pressed ? "#C6C7C8" : null },
              {
                width: "100%",
                height: "100%",
                maxWidth: 330,
                display: "flex",
                flexDirection: "row",
                borderRadius: 12,
              },
            ]}
            onPress={() => alert("Ir a detalle de evento")}
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
            <View style={{ width: "75%", marginRight: 15, marginLeft: 5 }}>
              <View
                style={{ width: "95%", marginTop: 15, marginHorizontal: 15 }}
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
                style={{ width: "95%", marginTop: 10, marginHorizontal: 15 }}
              >
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: "500",
                    color: "#333333",
                    lineHeight: 16,
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
