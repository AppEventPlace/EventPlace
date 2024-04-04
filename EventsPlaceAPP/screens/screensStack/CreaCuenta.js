import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
  Modal,
  TouchableOpacity,
} from "react-native";
import DatePicker from "react-native-modern-datepicker";
import { useNavigation } from "@react-navigation/native";
import CreaConstrasena from "./CreaContrasena";
import { useState } from "react";

//

const CreaCuenta = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  function handleOnPress() {
    setOpen(!open);
  }

  function handleChanged(propDate) {
    setDate(propDate);
  }

  return (
    <View style={style.PerfilContainer}>
      <Text> Nombre y apellido </Text>
      <TextInput placeholder="Ingresa tu nombre y apellido" />
      <Text>Fecha de nacimiento</Text>
      <TouchableOpacity onPress={handleOnPress}>
        <Text>Seleccionar fecha</Text>
      </TouchableOpacity>
      <Modal animationType="slide" transparent={true} visible={open}>
        <View style={{ position: "center" }}>
          <View>
            <DatePicker
              mode="calendar"
              selected={date}
              onDateChange={handleChanged}
            />
            <TouchableOpacity onPress={handleOnPress}>
              <Text>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Button
        title="Continuar"
        onPress={() => navigation.navigate("Crea tu contraseña")}
      />
    </View>
  );
};

const style = StyleSheet.create({
  PerfilContainer: {
    backgroundColor: "white",
  },
});

export default CreaCuenta;
