import React from "react";
import { View, StyleSheet, Text } from "react-native";

import { connect } from "react-redux";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Inicio from "./Home";
import PantallaLogin from "./screens/Auth/PantallaLogin";
import Registrarse from "./screens/Auth/Registrarse";
import RecuperarContrasena from "./screens/Auth/RecuperarContrasena";
import MiCuenta from "./screens/MiCuenta/MiCuenta";
import MisPedidos from "./screens/Pedidos/MisPedidos";
import DetalleSolicitado from "./screens/Pedidos/DetalleSolicitado";

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
        <Stack.Screen name="Registrarse" component={Registrarse} />
        <Stack.Screen
          name="RecuperarContrasena"
          component={RecuperarContrasena}
        />

        <Stack.Screen name="Inicio" component={Inicio} />

        {/* Mi Cuenta */}
        <Stack.Screen name="MiCuenta" component={MiCuenta} />

        {/* Mis Pedidos */}
        <Stack.Screen name="MisPedidos" component={MisPedidos} />
        <Stack.Screen name="DetalleSolicitado" component={DetalleSolicitado} />
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
