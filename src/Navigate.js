import React from "react";
import { View, StyleSheet, Text, Platform } from "react-native";

import { connect } from "react-redux";

import { NavigationContainer } from "@react-navigation/native";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";

import Inicio from "./Home";
import PantallaLogin from "./screens/Auth/PantallaLogin";
import Registrarse from "./screens/Auth/Registrarse";
import RecuperarContrasena from "./screens/Auth/RecuperarContrasena";
import MiCuenta from "./screens/MiCuenta/MiCuenta";
import MisPedidos from "./screens/Pedidos/MisPedidos";
import DetalleSolicitado from "./screens/Pedidos/DetalleSolicitado";
import DetalleEnCamino from "./screens/Pedidos/DetalleEnCamino";
import Facturacion from "./screens/Facturacion/Facturacion";
import CambiarContraseña from "./screens/MiCuenta/CambiarContraseña";
import NotificacionesEjemplo from "./pruebas/NotificacionesEjemplo";

const Navegador = (props) => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="PantallaLogin"
      >
        {/* Login Process */}
        <Stack.Screen name="PantallaLogin" component={PantallaLogin} />
        <Stack.Screen
          name="NotificacionesEjemplo"
          component={NotificacionesEjemplo}
        />
        <Stack.Screen name="Registrarse" component={Registrarse} />
        <Stack.Screen
          name="RecuperarContrasena"
          component={RecuperarContrasena}
        />

        <Stack.Screen name="Inicio" component={Inicio} />

        {/* Mi Cuenta */}
        <Stack.Screen
          name="MiCuenta"
          component={MiCuenta}
          options={{
            cardStyleInterpolator:
              Platform.OS == "ios"
                ? CardStyleInterpolators.forHorizontalIOS
                : CardStyleInterpolators.forNoAnimation,
          }}
        />

        <Stack.Screen name="CambiarContrasena" component={CambiarContraseña} />

        {/* Mis Pedidos */}
        <Stack.Screen
          name="MisPedidos"
          component={MisPedidos}
          options={{
            cardStyleInterpolator:
              Platform.OS == "ios"
                ? CardStyleInterpolators.forHorizontalIOS
                : CardStyleInterpolators.forNoAnimation,
          }}
        />
        <Stack.Screen
          name="DetalleSolicitado"
          component={DetalleSolicitado}
          options={{
            cardStyleInterpolator:
              Platform.OS == "ios"
                ? CardStyleInterpolators.forHorizontalIOS
                : CardStyleInterpolators.forNoAnimation,
          }}
        />
        <Stack.Screen
          name="DetalleEnCamino"
          component={DetalleEnCamino}
          options={{
            cardStyleInterpolator:
              Platform.OS == "ios"
                ? CardStyleInterpolators.forHorizontalIOS
                : CardStyleInterpolators.forNoAnimation,
          }}
        />
        <Stack.Screen
          name="MiFacturacion"
          component={Facturacion}
          options={{
            cardStyleInterpolator:
              Platform.OS == "ios"
                ? CardStyleInterpolators.forHorizontalIOS
                : CardStyleInterpolators.forNoAnimation,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    //backgroundColor: '#e1e8f4',
  },
});

const mapStateToProps = (state) => ({
  login: state.login,
});

export default connect(mapStateToProps)(Navegador);
