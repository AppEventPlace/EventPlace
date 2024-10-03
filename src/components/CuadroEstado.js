import React from "react";
import { View, Text, Pressable } from "react-native";
import SvgLogo from "../assets/LogoSVG";
const CuadroEstado = ({ label, cantidad, id }) => {
  switch (id) {
    case "EventoCreado":
      return (
        <View
          style={{
            //display: "flex",
            width: "45%",
            maxWidth: 190,
            height: 140,
            backgroundColor: "#FBFBFB",
            borderRadius: 12,
            marginTop: 5,
            marginHorizontal: 5,
            marginBottom: 15,
            elevation: 5,
          }}
        >
          <Pressable onPress={() => alert("prueba")}>
            <View
              style={{ width: 130, height: 35, marginLeft: 15, marginTop: 20 }}
            >
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>{label}</Text>
            </View>
            <View
              style={{ display: "flex", flexDirection: "row", marginTop: 0 }}
            >
              <Text
                style={{
                  color: "#828282",
                  marginTop: 5,
                  marginLeft: 15,
                  width: "80%",
                }}
              >
                Cantidad
              </Text>
              <Text style={{ color: "#828282", marginTop: 5, marginLeft: 1 }}>
                {cantidad}
              </Text>
            </View>
            <View style={{ marginTop: 15, marginLeft: 15 }}>
              <SvgLogo
                theme="Celebracion"
                ancho={"30"}
                alto={"28"}
                color={"#515EC0"}
              />
            </View>
          </Pressable>
        </View>
      );
    case "EventoComprado":
      return (
        <View
          style={{
            display: "flex",
            width: "45%",
            maxWidth: 190,
            height: 140,
            backgroundColor: "#FBFBFB",
            borderRadius: 12,
            marginTop: 5,
            marginHorizontal: 5,
            marginBottom: 15,
            elevation: 5,
          }}
        >
          <Pressable onPress={() => alert("prueba")}>
            <View
              style={{ width: 130, height: 35, marginLeft: 15, marginTop: 20 }}
            >
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>{label}</Text>
            </View>
            <View
              style={{ display: "flex", flexDirection: "row", marginTop: 0 }}
            >
              <Text
                style={{
                  color: "#828282",
                  marginTop: 5,
                  marginLeft: 15,
                  width: "80%",
                }}
              >
                Cantidad
              </Text>
              <Text style={{ color: "#828282", marginTop: 5, marginLeft: 1 }}>
                {cantidad}
              </Text>
            </View>
            <View style={{ marginTop: 15, marginLeft: 15 }}>
              <SvgLogo theme="Moneda" color="#00C48C" />
            </View>
          </Pressable>
        </View>
      );
    case "MisInvitaciones":
      return (
        <View
          style={{
            display: "flex",
            width: "45%",
            maxWidth: 190,
            height: 140,
            backgroundColor: "#FBFBFB",
            borderRadius: 12,
            marginTop: 5,
            marginHorizontal: 5,
            marginBottom: 15,
            elevation: 5,
          }}
        >
          <Pressable onPress={() => alert("prueba")}>
            <View
              style={{ width: 130, height: 35, marginLeft: 15, marginTop: 20 }}
            >
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>{label}</Text>
            </View>
            <View
              style={{ display: "flex", flexDirection: "row", marginTop: 0 }}
            >
              <Text
                style={{
                  color: "#828282",
                  marginTop: 5,
                  marginLeft: 15,
                  width: "80%",
                }}
              >
                Cantidad
              </Text>
              <Text style={{ color: "#828282", marginTop: 5, marginLeft: 1 }}>
                {cantidad}
              </Text>
            </View>
            <View style={{ marginTop: 15, marginLeft: 12 }}>
              <SvgLogo
                theme="BoletasLogo"
                color="#FDB022"
                ancho="33"
                alto="28"
              />
            </View>
          </Pressable>
        </View>
      );
    case "MisLugares":
      return (
        <View
          style={{
            display: "flex",
            width: "45%",
            maxWidth: 190,
            height: 140,
            backgroundColor: "#FBFBFB",
            borderRadius: 12,
            marginTop: 5,
            marginHorizontal: 5,
            marginBottom: 15,
            elevation: 5,
          }}
        >
          <Pressable onPress={() => alert("prueba")}>
            <View
              style={{ width: 130, height: 35, marginLeft: 15, marginTop: 20 }}
            >
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>{label}</Text>
            </View>
            <View
              style={{ display: "flex", flexDirection: "row", marginTop: 0 }}
            >
              <Text
                style={{
                  color: "#828282",
                  marginTop: 5,
                  marginLeft: 15,
                  width: "80%",
                }}
              >
                Cantidad
              </Text>
              <Text style={{ color: "#828282", marginTop: 5, marginLeft: 1 }}>
                {cantidad}
              </Text>
            </View>
            <View style={{ marginTop: 15, marginLeft: 15 }}>
              <SvgLogo theme="Ubicacion" color={"#0084F4"} />
            </View>
          </Pressable>
        </View>
      );
    case "Estadisticas":
      return (
        <View
          style={{
            display: "flex",
            width: "95%",
            maxWidth: 400,
            height: 140,
            backgroundColor: "#FBFBFB",
            borderRadius: 12,
            marginTop: 5,
            marginHorizontal: 5,
            marginBottom: 15,
            elevation: 5,
          }}
        >
          <Pressable onPress={() => alert("prueba")}>
            <View
              style={{
                width: "100%",
                height: 35,
                marginLeft: 15,
                marginTop: 20,
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>{label}</Text>
            </View>
            <View
              style={{ display: "flex", flexDirection: "row", marginTop: 0 }}
            >
              <Text
                style={{
                  color: "#828282",
                  marginTop: 5,
                  marginLeft: 15,
                  width: "90%",
                }}
              >
                Cantidad
              </Text>
              <Text style={{ color: "#828282", marginTop: 5, marginRight: 1 }}>
                {cantidad}
              </Text>
            </View>
            <View style={{ marginTop: 15, marginLeft: 15 }}>
              <SvgLogo theme="LeaderBoard" />
            </View>
          </Pressable>
        </View>
      );
    case "EstadisticasContratacion":
      return (
        <View
          style={{
            display: "flex",
            width: "95%",
            maxWidth: 400,
            height: 140,
            backgroundColor: "#FBFBFB",
            borderRadius: 12,
            marginTop: 5,
            marginHorizontal: 5,
            marginBottom: 15,
            elevation: 5,
          }}
        >
          <Pressable onPress={() => alert("prueba")}>
            <View
              style={{
                width: "100%",
                height: 35,
                marginLeft: 15,
                marginTop: 20,
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>{label}</Text>
            </View>
            <View
              style={{ display: "flex", flexDirection: "row", marginTop: 0 }}
            >
              <Text
                style={{
                  color: "#828282",
                  marginTop: 5,
                  marginLeft: 15,
                  width: "90%",
                }}
              >
                Cantidad
              </Text>
              <Text style={{ color: "#828282", marginTop: 5, marginRight: 1 }}>
                {cantidad}
              </Text>
            </View>
            <View style={{ marginTop: 15, marginLeft: 15 }}>
              <SvgLogo theme="Monitoreo" />
            </View>
          </Pressable>
        </View>
      );
  }
};
export default CuadroEstado;
