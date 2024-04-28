import React, { useState } from "react";
import { View, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import Boton from "./Button";
//import moment from "moment";

///"@react-native-community/datetimepicker"; //

const DatePickerComponent = ({ onDateChange, IconColor }) => {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === "ios");
    setDate(currentDate);
    // Llama a la función de actualización de fecha en el componente padre
    onDateChange(currentDate);
  };

  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  return (
    <View style={{ width: "100%" }}>
      <Boton
        theme="FullStyleBoton1"
        Icon="Calendario"
        onPress={showDatepicker}
        IconColor={IconColor} // Color del icono SVG
      />
      {/* <TextInput
        placeholder="Fecha de nacimiento"
        value={moment(date).format("DD/MM/YYYY")}
        editable={false}
      /> */}
      {showDatePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={onChange}
          //   hapticFeedback={false} // Desactivar la vibración
        />
      )}
    </View>
  );
};

export default DatePickerComponent;
