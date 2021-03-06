import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
//importaciones necesarias para redux//
import { connect, useDispatch, useSelector } from "react-redux";
import { getCurrentDeliverys } from "./apis/querys";

import BasicHeader from "./components/Header/BasicHeader";
import BillingIcon from "./components/Icons/BillingIcon";
import ElGasLogo from "./components/Icons/ElGasLogo";
import LogoutIcon from "./components/Icons/LogoutIcon";
import OrdersIcon from "./components/Icons/OrdersIcon";
import ProfileIcon from "./components/Icons/ProfileIcon";
import SearchIcon from "./components/Icons/SearchIcon";
import StarIcon from "./components/Icons/StarIcon";
import Container from "./generales/Container";
import { actualizarLogin } from "./redux/reducers/login";

const Inicio = (props) => {
  const login = useSelector((state) => state.login.login);
  const dispatch = useDispatch();

  const navigateToFacturacion = () => {
    props.navigation.navigate("MiFacturacion");
  };

  return (
    <Container
      style={styles.container}
      footer={false}
      navigation={props.navigation}
    >
      <BasicHeader
        title="Inicio"
        icon={<SearchIcon height={20} width={20} />}
        centerComponent={() => <ElGasLogo height={35} width={35} />}
      />
      <View
        style={[
          {
            width: "100%",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          },
        ]}
      >
        <View style={[{ alignItems: "center", width: "50%" }]}>
          <Text style={[{ fontWeight: "bold", fontSize: RFPercentage(3.0) }]}>
            ¡Hola {login.userName}!
          </Text>
          <Text>{login.email}</Text>
          <View
            style={[
              {
                flexDirection: "row",
                justifyContent: "space-evenly",
                width: "50%",
                marginTop: 10,
              },
            ]}
          >
            <StarIcon height={15} width={15} />
            <StarIcon height={15} width={15} />
            <StarIcon height={15} width={15} />
            <StarIcon height={15} width={15} />
          </View>
        </View>

        <View style={[{ marginTop: 30 }]}>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => props.navigation.navigate("MiCuenta")}
          >
            <View style={[{ flexDirection: "row", alignItems: "center" }]}>
              <View style={[{ width: 30, height: 30, marginVertical: 15 }]}>
                <ProfileIcon
                  width="100%"
                  height="100%"
                  // color={colores.amarillo}
                />
              </View>
              <Text
                style={[
                  {
                    marginLeft: 10,
                    fontWeight: "bold",
                    fontSize: RFPercentage(2),
                  },
                ]}
              >
                Mi cuenta
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => props.navigation.navigate("MisPedidos")}
          >
            <View style={[{ flexDirection: "row", alignItems: "center" }]}>
              <View style={[{ width: 30, height: 30, marginVertical: 15 }]}>
                <OrdersIcon width="100%" height="100%" />
              </View>
              <Text
                style={[
                  {
                    marginLeft: 10,
                    fontWeight: "bold",
                    fontSize: RFPercentage(2),
                  },
                ]}
              >
                Mis pedidos
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => navigateToFacturacion()}
          >
            <View style={[{ flexDirection: "row", alignItems: "center" }]}>
              <View style={[{ width: 30, height: 30, marginVertical: 15 }]}>
                <BillingIcon width="100%" height="100%" />
              </View>
              <Text
                style={[
                  {
                    marginLeft: 10,
                    fontWeight: "bold",
                    fontSize: RFPercentage(2),
                  },
                ]}
              >
                Mi facturación
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() =>
              dispatch(
                actualizarLogin({
                  isLogged: false,
                  uid: "",
                  userName: "",
                  email: "",
                  token: "",
                })
              )
            }
          >
            <View style={[{ flexDirection: "row", alignItems: "center" }]}>
              <View style={[{ width: 30, height: 30, marginVertical: 15 }]}>
                <LogoutIcon width="100%" height="100%" />
              </View>
              <Text
                style={[
                  {
                    marginLeft: 10,
                    fontWeight: "bold",
                    fontSize: RFPercentage(2),
                  },
                ]}
              >
                Cerrar sesión
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    flex: 1,
  },
});
//
export default Inicio;
