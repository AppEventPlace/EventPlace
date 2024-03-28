import { createBottomTabNavigator} from '@react-navigation/drawer';

function PerfilScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
  
  function CreacionEventoScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }

  const Tab = createBottomTabNavigator();

  const MenuMovil = () =>{
        return(
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="Perfil" component={PerfilScreen}/>
                    <Tab.Screen name="Creación Evento" component={CreacionEventoScreen}/>
                </Tab.Navigator>
            </NavigationContainer>
        );

  }