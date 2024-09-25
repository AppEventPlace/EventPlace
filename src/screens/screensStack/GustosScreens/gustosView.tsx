// GustosView.tsx
import React, { useState } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearProgress } from '@rneui/themed';
import Boton from '@/components/Button';
import BackCheckron from '@/components/CommonComponents/BackCheckron';
import SeleccionTags from '@/components/SeleccionTags';
import CommonSpacingStyles from '@/components/CommonStyles/CommonSpacingStyles';
import CommonStyles, { Colors } from '@/components/CommonStyles/CommonStyles';
import CommonTextStyles from '@/components/CommonStyles/CommonTextStyles';
import OpcionesSeleccion from '@/constants/OpcionesSeleccion';
import { Checkbox } from 'react-native-paper';
import { IPreference } from '@/interfaces/IPreference';

export interface IGustosViewProps {
  preferences: IPreference[]; 
}


const GustosView: React.FC<IGustosViewProps> = ({
  preferences
}) => {
  // Estado para manejar los checkboxes
  const [checkedCrearEventos, setCheckedCrearEventos] = useState<boolean>(false);
  const [checkedPrestarServicios, setCheckedPrestarServicios] = useState<boolean>(false);
  const [checkedTenerLugar, setCheckedTenerLugar] = useState<boolean>(false);

  const Progress = 0.6;

  return (
    <SafeAreaView style={[CommonStyles.AreaView, { backgroundColor: Colors.Primary }]}>
      <View style={[CommonSpacingStyles.VerticalSpacing_10_16, { display: "flex", flexDirection: "row", height: 30, width: "100%" }]}>
        <View style={{ flex: 2 }}>
          <BackCheckron navigation={navigator} />
        </View>
        <View style={{ width: 60, alignItems: "flex-end" }}>
          <Boton theme={"botonSubRay"} label={"Saltar"} onPress={() => {}} />
        </View>
      </View>

      <ScrollView style={CommonStyles.ScrollView}>
        <View style={CommonStyles.FullContainer}>
          <View style={[CommonStyles.ViewProgressBar, { marginVertical: 12 }]}>
            <LinearProgress
              style={CommonStyles.ProgressBar}
              value={Progress}
              color={Colors.NightBlue_800}
              variant="determinate"
              trackColor={Colors.NightBlue_200}
              animation={{ duration: 1500 }}
            />
            <Text>{Progress * 100}%</Text>
          </View>

          <View style={CommonSpacingStyles.VerticalSpacing_40}>
            <View style={CommonSpacingStyles.VerticalSpacing_24}>
              <View style={CommonSpacingStyles.VerticalSpacing_16}>
                <Text style={CommonTextStyles.Heding_H5}>Gustos y servicios</Text>
                <Text style={CommonTextStyles.SemiBold_L}>
                  Selecciona algunos eventos a los cuales te gusta ir o participar
                </Text>
              </View>

              <View style={[CommonStyles.container, { paddingHorizontal: 10, paddingVertical: 10 }]}>
                <SeleccionTags OpcSeleccion={OpcionesSeleccion} />
              </View>

              {/* Selección de Preferencias */}
              <View style={[CommonStyles.container, { paddingHorizontal: 10, paddingVertical: 10 }]}>
                <Checkbox.Item
                  label="¿Te gusta crear eventos?"
                  status={checkedCrearEventos ? 'checked' : 'unchecked'}
                  onPress={() => setCheckedCrearEventos(!checkedCrearEventos)}
                />
                <Checkbox.Item
                  label="¿Prestas servicios para eventos?"
                  status={checkedPrestarServicios ? 'checked' : 'unchecked'}
                  onPress={() => setCheckedPrestarServicios(!checkedPrestarServicios)}
                />
                <Checkbox.Item
                  label="¿Cuentas con un lugar/sitio/negocio para realizar eventos?"
                  status={checkedTenerLugar ? 'checked' : 'unchecked'}
                  onPress={() => setCheckedTenerLugar(!checkedTenerLugar)}
                />
              </View>
            </View>

            <View style={{ marginBottom: 30, marginHorizontal: 5, maxWidth: 330, minWidth: 320, alignSelf: "center" }}>
              <Boton theme={"Seleccionable"} label={"Continuar"} onPress={() => {}} />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default GustosView;
