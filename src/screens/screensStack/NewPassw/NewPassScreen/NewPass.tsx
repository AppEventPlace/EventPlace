import IconSvg from "@/components/assets/IconSvg";
import BackCheckron from "@/components/CommonComponents/BackCheckron";
import Button from "@/components/CommonComponents/Button";
import CommonSpacingStyles from "@/components/CommonStyles/CommonSpacingStyles";
import CommonStyles, { Colors } from "@/components/CommonStyles/CommonStyles";
import CommonTextStyles from "@/components/CommonStyles/CommonTextStyles";
import React, { useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { Input } from "react-native-elements";
import { color } from "react-native-elements/dist/helpers";

interface ForgPassProps {
  navigation: any;
}

const NewPass: React.FC<ForgPassProps> = ({ navigation }) => {
  const [passwword, setPassword] = useState("");

  const Password = (password: string) => {
    setPassword(password);
  };
  return (
    <SafeAreaView
      style={[CommonStyles.AreaView, { backgroundColor: Colors.Primary }]}
    >
      <View
        style={[
          CommonSpacingStyles.VerticalSpacing_10_16,
          { display: "flex", flexDirection: "row", height: 30, width: "100%" },
        ]}
      >
        <View style={{ flex: 2 }}>
          <BackCheckron navigation={navigation} />
        </View>
      </View>
      <View
        style={[CommonStyles.FullContainer, { paddingVertical: 10, gap: 28 }]}
      >
        <View style={{ gap: 28 }}>
          <IconSvg theme="Key" progress={0} IconColor="green" />
        </View>
        <View style={[CommonStyles.container, { gap: 32 }]}>
          <InputForm
            Title="Nueva Contraseña"
            label="Utilizar una combinación de letras, entre 6 y 12
                caracteres alfanuméricos."
            placeholder="Ingresa la nueva contraseña"
            password={Password}
          />
          <InputForm
            Title="Confirma la nueva Contraseña"
            label="Utilizar una combinación de letras, entre 6 y 12
                caracteres alfanuméricos."
            placeholder="Confirma la nueva contraseña"
            password={Password}
          />
          <View style={{ height: 43, width: "90%" }}>
            <Button
              theme="StyleBoton"
              label="Enviar"
              onPress={() => [
                console.log(passwword),
                //navigation.navigate("OtpAdviceRecOtp"),
                //OtpConsumer(correo), servicio de actualizar contraseña
              ]}
              color={Colors.NightBlue_600}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
interface InputFormProp {
  Title?: string;
  label?: string;
  placeholder?: string;
  password: (value: string) => void;
}
const InputForm: React.FC<InputFormProp> = ({
  Title,
  label,
  placeholder,
  password,
}) => {
  return (
    <View style={{ width: "100%" }}>
      <Text style={[CommonTextStyles.SemiBold_M, { alignSelf: "flex-start" }]}>
        {Title}
      </Text>
      <Input
        placeholder={placeholder}
        onChangeText={(value) => [password(value)]}
      />
      <Text style={[CommonTextStyles.Body_S, { color: Colors.TexColor }]}>
        {label}
      </Text>
    </View>
  );
};
export default NewPass;
