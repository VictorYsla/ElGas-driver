import React, { useState } from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import Constants from "expo-constants";
import { TouchableOpacity } from "react-native-gesture-handler";
import Cargando from "./Cargando";
import { connect, useDispatch, useSelector } from "react-redux";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFPercentage } from "react-native-responsive-fontsize";

import { colores, pantalla } from "../constantes/Temas";
import SvgHome from "../components/Icons/HomeIcon";
import SvgProfile from "../components/Icons/ProfileIcon";
import SvgOrders from "../components/Icons/OrdersIcon";
import CardIcon from "../components/Icons/CardIcon";
import SvgLogout from "../components/Icons/LogoutIcon";
import { actions } from "../redux";

const { width, height } = Dimensions.get("window");

function Container({
  styleContainer,
  children,
  isloading = false,
  navigation,
  footer = true,
}) {
  return (
    <View style={styles.container}>
      <View style={[{ flex: 1, width: "100%" }, styleContainer]}>
        {children}
      </View>
      {footer && <Footer navigation={navigation} />}
      {isloading && (
        <Cargando
          style={{
            position: "absolute",
            backgroundColor: "rgba(52,52,52,0.5)",
            height: "100%",
          }}
        />
      )}
    </View>
  );
}

const Footer = ({ navigation }) => {
  const { screenWidth } = pantalla;

  const routeName = useSelector((state) => state.navegacion.routeName);

  return (
    <View style={styles.footer}>
      <View
        style={{
          width: "20%",
          backgroundColor: "#fff",
          // borderTopWidth: routeName === "Inicio" ? 1 : 0,
          // borderTopColor: routeName === "Inicio" ? colores.amarillo : "",
        }}
      >
        <Item
          navigation={navigation}
          ruta="Inicio"
          texto="Inicio"
          icon={
            <SvgHome
              height={screenWidth <= 360 ? "30%" : "40%"}
              width={screenWidth <= 360 ? "30%" : "40%"}
              color={
                routeName === "Inicio" ? colores.amarillo : colores.bgOscuro
              }
            />
          }
        />
      </View>
      <View
        style={{
          width: "20%",
          backgroundColor: "#fff",
          borderTopWidth: routeName === "MiCuenta" ? 2 : 0,
          borderTopColor: routeName === "MiCuenta" ? colores.amarillo : "",
        }}
      >
        <Item
          navigation={navigation}
          ruta="MiCuenta"
          texto="Mi Cuenta"
          icon={
            <SvgProfile
              height={screenWidth <= 360 ? "30%" : "40%"}
              width={screenWidth <= 360 ? "30%" : "40%"}
              color={
                routeName === "MiCuenta" ? colores.amarillo : colores.bgOscuro
              }
            />
          }
        />
      </View>
      <View
        style={{
          width: "20%",
          backgroundColor: "#fff",
          borderTopWidth: routeName === "MisPedidos" ? 2 : 0,
          borderTopColor: routeName === "MisPedidos" ? colores.amarillo : "",
        }}
      >
        <Item
          navigation={navigation}
          ruta="MisPedidos"
          texto="Mis Pedidos"
          icon={
            <SvgOrders
              height={screenWidth <= 360 ? "30%" : "40%"}
              width={screenWidth <= 360 ? "30%" : "40%"}
              color={
                routeName === "MisPedidos" ? colores.amarillo : colores.bgOscuro
              }
            />
          }
        />
      </View>
      <View
        style={{
          width: "20%",
          backgroundColor: "#fff",
          borderTopWidth: routeName === "MiFacturacion" ? 2 : 0,
          borderTopColor: routeName === "MiFacturacion" ? colores.amarillo : "",
        }}
      >
        <Item
          navigation={navigation}
          ruta="Facturacion"
          texto="Mi Facturacion"
          icon={
            <CardIcon
              height={screenWidth <= 360 ? "30%" : "40%"}
              width={screenWidth <= 360 ? "30%" : "40%"}
              color={
                routeName === "MiFacturacion"
                  ? colores.amarillo
                  : colores.bgOscuro
              }
            />
          }
        />
      </View>
      <View
        style={{
          width: "20%",
          backgroundColor: "#fff",
          borderTopWidth: routeName === "Logout" ? 1 : 0,
          borderTopColor: routeName === "Logout" ? colores.amarillo : "",
        }}
      >
        <Item
          navigation={navigation}
          texto="Cerrar Sesión"
          icon={
            <SvgLogout
              height={screenWidth <= 360 ? "30%" : "40%"}
              width={screenWidth <= 360 ? "30%" : "40%"}
              color={
                routeName === "Logout" ? colores.amarillo : colores.bgOscuro
              }
            />
          }
        />
      </View>
    </View>
  );
};

const Item = ({ navigation, ruta, texto, icon }) => {
  const { screenWidth } = pantalla;
  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(ruta);
        (ruta !== "Inicio" || ruta !== "Logout") &&
          dispatch(actions.actualizarUbicacion(ruta));
      }}
      style={styles.tabButton}
    >
      {icon}
      <Text
        style={{
          fontSize: screenWidth <= 360 ? RFPercentage(1.5) : RFPercentage(1.3),
          textAlign: "center",
        }}
      >
        {texto}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    flex: 1,
    backgroundColor: "#fff",
  },
  footer: {
    flexDirection: "row",
    width: "100%",
    height: 60,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    // elevation: 30,
    borderTopColor: "rgba(0,0,0,0.05)",
    borderTopWidth: 2,
    borderLeftColor: "rgba(0,0,0,0.05)",
    borderLeftWidth: 1,
    borderRightColor: "rgba(0,0,0,0.05)",
    borderRightWidth: 1,
    justifyContent: "space-between",
    overflow: "hidden",
  },
  tabButton: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(Container);
