import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, TextInput } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { useDispatch, useSelector } from "react-redux";
import CustomButton from "../../components/CustomButton";
import CustomSelector from "../../components/Form/Selector";
import BasicHeader from "../../components/Header/BasicHeader";
import ChevronLeftIcon from "../../components/Icons/ChevronLeftIcon";
import DayDeliveryIcon from "../../components/Icons/DayDeliveryIcon";
import EmailIcon from "../../components/Icons/EmailIcon";
import IDIcon from "../../components/Icons/IDIcon";
import IDNumberIcon from "../../components/Icons/IDNumberIcon";
import NightDeliveryIcon from "../../components/Icons/NightDeliveryIcon";
import OutlineUserIcon from "../../components/Icons/OutlineUserIcon";
import PhoneIcon from "../../components/Icons/PhoneIcon";
import { colores, pantalla } from "../../constantes/Temas";
import Container from "../../generales/Container";
import useForm from "../../hooks/useForm";
import { actions } from "../../redux";
import {
  getCollection,
  getCurrentDeliverys,
  getDeliverys,
  postCollection,
  updateCollection,
} from "../../apis/querys";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { TouchableOpacity } from "react-native-gesture-handler";
import navigation from "../../redux/reducers/navigation";

const initialValues = {
  name: "",
  dniType: "",
  dni: "",
  phone: "",
  email: "",
  day_delivery: "",
  nigth_delivery: "",
};

const dataPushFirebase = {
  id_pedido: "3uhe3u",
  nombre_cliente: "Roberto Salazar",
  id_cliente: "wjiefii23",
  estrellas: 4,
  forma_pago: "Efectivo",
  fecha: +new Date(),
  cliente_token: "7w833yerewr",
  direccion: {
    latitud: -73.3434,
    longitud: -0.63723,
    nombre: "Casa 1",
    informacion_adicional: {
      apartamento: 3,
      numero: 245,
    },
  },
  productos: [
    {
      description: "Válvula de gran capacidad.",
      capacity: 45,
      unity: "kg",
      id: "6734ry3",
      name: "Válvula",
      price: 1.6,
      quantity: 4,
    },
  ],
};

const MiCuenta = (props) => {
  const { screenHeight } = pantalla;
  const user = useSelector((state) => state.login.login);
  const [repartidor, setRepartidor] = useState([]);
  // const [enviar, setEnviar] = useState(false);

  const form = useForm({ initialValues });

  // console.log(form.fields);
  console.log("user:", user);

  const dispatch = useDispatch();

  useEffect(() => {
    // getCurrentDeliverys("333333333333").then((response) => {
    //   console.log("Resposne: ", response);
    // });
    // getDeliverys().then((response) => {
    //   console.log("Resposne2: ", response);
    // });
    // postCollection('plant_pedidos_en_camino', dataPushFirebase)
    // const getRepartidor = async () => {
    //   await getCollection("usuarios").then((response) => {
    //     setRepartidor(response.filter((i) => i.id_driver === user.uid));
    //     dispatch(
    //       actions.actualizarLogin({ ...user, information: repartidor[0] })
    //     );
    //   });
    // };
    // getRepartidor();

    getCollection("usuarios").then((response) => {
      setRepartidor(response.filter((i) => i.id_driver === user.uid));
      dispatch(actions.actualizarLogin({ ...user, information: response[0] }));
    });

    const actualizarRuta = (ruta) =>
      dispatch(actions.actualizarUbicacion(ruta));
    actualizarRuta(props.route.name);
  }, []);
  // console.log('Form: ', form.fields);

  const id = repartidor.length > 0 ? repartidor[0].id_info : "vacio";

  const onSubmit = async () => {
    const payload = {
      // id de usuario
      name: form.fields["name"],
      dniType: form.fields["dniType"],
      dni: form.fields["dni"],
      phone: form.fields["phone"],
      email: form.fields["email"],
      day_delivery: form.fields["day_delivery"],
      nigth_delivery: form.fields["nigth_delivery"],
      id_driver: user.uid,
    };

    if (repartidor.length === 0 && payload.email.length !== 0) {
      postCollection("usuarios", payload).then((r) => {
        r ? alert("Datos guardados con éxito") : alert("Ups, sucedió un error");
      });
    }
    if (repartidor.length > 0 && payload.email.length !== 0) {
      updateCollection("usuarios", id, payload).then((r) => {
        r
          ? alert("Cambios realizados con éxito")
          : alert("Ups, sucedió un error");
      });
    }
    payload.email.length === 0 &&
      alert("Complete correctamente todos los datos");
  };

  return (
    <Container
      styleContainer={[
        styles.screen,
        { minHeight: screenHeight <= 592 ? 425 : 550 },
      ]}
      navigation={props.navigation}
    >
      <BasicHeader
        icon={<ChevronLeftIcon height={15} width={15} />}
        title="Mi Cuenta"
      />

      <View
        style={[
          {
            width: "100%",
            flex: 1,
            alignItems: "center",
            justifyContent: screenHeight <= 592 ? "flex-start" : "space-around",
            height: "100%",
            // marginBottom=hp(10),
            minHeight: screenHeight <= 592 ? 450 : 600,
          },
        ]}
      >
        <Text
          style={[
            {
              fontWeight: "bold",
              fontSize: RFPercentage(2.2),
              // marginVertical: 10,
            },
          ]}
        >
          Mi información
        </Text>

        {/* Form Wrapper */}
        <View style={[{ height: hp(80), width: "90%" }]}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ marginLeft: hp(5) }}
          >
            <View
              style={[
                {
                  flexDirection: "row",
                  alignItems: "center",
                  width: "80%",
                  // marginVertical: 15,
                  marginTop: hp(1),
                  // marginBottom: hp(1),
                },
              ]}
            >
              <View style={[{ width: "20%" }]}>
                <View
                  style={[
                    {
                      width: screenHeight <= 592 ? 20 : 25,
                      height: screenHeight <= 592 ? 20 : 25,
                    },
                  ]}
                >
                  <OutlineUserIcon width="100%" height="100%" />
                </View>
              </View>
              <View>
                <Text
                  style={[{ fontWeight: "bold", fontSize: RFPercentage(2.2) }]}
                >
                  Nombre y Apellido
                </Text>
                <TextInput
                  style={[
                    {
                      width: 200,
                      borderBottomColor: "#000",
                      borderBottomWidth: 1,
                      fontSize: RFPercentage(2.4),
                      paddingVertical: 5,
                      height: 30,
                    },
                  ]}
                  {...form.getInput("name")}
                  defaultValue={user.information ? user.information.name : ""}
                />
              </View>
            </View>
            <View
              style={[
                {
                  flexDirection: "row",
                  alignItems: "center",
                  marginVertical: 10,
                  width: "80%",
                },
              ]}
            >
              <View style={[{ width: "20%" }]}>
                <View
                  style={[
                    {
                      width: screenHeight <= 592 ? 20 : 25,
                      height: screenHeight <= 592 ? 20 : 25,
                    },
                  ]}
                >
                  <IDIcon width="100%" height="100%" />
                </View>
              </View>
              <View>
                <Text
                  style={[{ fontWeight: "bold", fontSize: RFPercentage(2.2) }]}
                >
                  Tipo de identificación
                </Text>
                <View
                  style={[
                    {
                      flexDirection: "row",
                      alignItems: "center",
                    },
                  ]}
                >
                  <CustomSelector
                    fields={["C.I", "R.U.C"]}
                    form={form}
                    radiusHeight={15}
                    radiusWidth={15}
                    dni={
                      user.information ? user.information.dniType : undefined
                    }
                  />
                </View>
              </View>
            </View>
            <View
              style={[
                { flexDirection: "row", alignItems: "center", width: "80%" },
              ]}
            >
              <View style={[{ width: "20%", marginLeft: -10 }]}>
                <View
                  style={[
                    {
                      width: screenHeight <= 592 ? 30 : 40,
                      height: screenHeight <= 592 ? 30 : 40,
                    },
                  ]}
                >
                  <IDNumberIcon width="100%" height="100%" />
                </View>
              </View>
              <View style={[{ marginLeft: 10 }]}>
                <Text
                  style={[{ fontWeight: "bold", fontSize: RFPercentage(2.2) }]}
                >
                  Número de identificación
                </Text>
                <TextInput
                  keyboardType={"numeric"}
                  style={[
                    {
                      width: 200,
                      borderBottomColor: "#000",
                      borderBottomWidth: 1,
                      fontSize: RFPercentage(2.4),
                      paddingVertical: 5,
                      height: 30,
                    },
                  ]}
                  {...form.getInput("dni")}
                  defaultValue={
                    user.information ? user.information.dni : undefined
                  }
                />
              </View>
            </View>
            <View
              style={[
                {
                  flexDirection: "row",
                  alignItems: "center",
                  marginVertical: 10,
                  width: "80%",
                },
              ]}
            >
              <View style={[{ width: "20%" }]}>
                <View
                  style={[
                    {
                      width: screenHeight <= 592 ? 20 : 25,
                      height: screenHeight <= 592 ? 20 : 25,
                    },
                  ]}
                >
                  <PhoneIcon width="100%" height="100%" />
                </View>
              </View>
              <View>
                <Text
                  style={[{ fontWeight: "bold", fontSize: RFPercentage(2.2) }]}
                >
                  Número de celular
                </Text>
                <TextInput
                  keyboardType={"numeric"}
                  style={[
                    {
                      width: 200,
                      borderBottomColor: "#000",
                      borderBottomWidth: 1,
                      fontSize: RFPercentage(2.4),
                      paddingVertical: 5,
                      height: 30,
                    },
                  ]}
                  {...form.getInput("phone")}
                  defaultValue={
                    user.information ? user.information.phone : undefined
                  }
                />
              </View>
            </View>
            <View
              style={[
                {
                  flexDirection: "row",
                  alignItems: "center",
                  marginVertical: 10,
                  width: "80%",
                },
              ]}
            >
              <View style={[{ width: "20%" }]}>
                <View
                  style={[
                    {
                      width: screenHeight <= 592 ? 20 : 25,
                      height: screenHeight <= 592 ? 20 : 25,
                    },
                  ]}
                >
                  <EmailIcon
                    width="100%"
                    height="100%"
                    color={colores.bgOscuro}
                  />
                </View>
              </View>
              <View>
                <Text
                  style={[{ fontWeight: "bold", fontSize: RFPercentage(2.2) }]}
                >
                  E-Mail
                </Text>
                <TextInput
                  keyboardType={"email-address"}
                  style={[
                    {
                      width: 200,
                      borderBottomColor: "#000",
                      borderBottomWidth: 1,
                      fontSize: RFPercentage(2.4),
                      paddingVertical: 5,
                      height: 30,
                    },
                  ]}
                  {...form.getInput("email")}
                  defaultValue={
                    user.information ? user.information.email : undefined
                  }
                />
              </View>
            </View>
            <View
              style={[
                {
                  flexDirection: "row",
                  alignItems: "center",
                  marginVertical: 10,
                  width: "80%",
                },
              ]}
            >
              <View style={[{ width: "20%" }]}>
                <View
                  style={[
                    {
                      width: screenHeight <= 592 ? 20 : 25,
                      height: screenHeight <= 592 ? 20 : 25,
                    },
                  ]}
                >
                  <DayDeliveryIcon width="100%" height="100%" />
                </View>
              </View>
              <View>
                <Text
                  style={[{ fontWeight: "bold", fontSize: RFPercentage(2.2) }]}
                >
                  Costo domicilio día
                </Text>
                <TextInput
                  style={[
                    {
                      width: 200,
                      borderBottomColor: "#000",
                      borderBottomWidth: 1,
                      fontSize: RFPercentage(2.4),
                      paddingVertical: 5,
                      height: 30,
                    },
                  ]}
                  {...form.getInput("day_delivery")}
                  defaultValue={
                    user.information ? user.information.day_delivery : undefined
                  }
                />
              </View>
            </View>
            <View
              style={[
                {
                  flexDirection: "row",
                  alignItems: "center",
                  marginVertical: 10,
                  width: "80%",
                },
              ]}
            >
              <View style={[{ width: "20%" }]}>
                <View
                  style={[
                    {
                      width: screenHeight <= 592 ? 20 : 25,
                      height: screenHeight <= 592 ? 20 : 25,
                    },
                  ]}
                >
                  <NightDeliveryIcon width="100%" height="100%" />
                </View>
              </View>
              <View>
                <Text
                  style={[
                    {
                      fontWeight: "bold",
                      fontSize: RFPercentage(2.2),
                    },
                  ]}
                >
                  Costo domicilio noche
                </Text>
                <TextInput
                  style={[
                    {
                      width: 200,
                      borderBottomColor: "#000",
                      borderBottomWidth: 1,
                      fontSize: RFPercentage(2.4),
                      paddingVertical: 5,
                      height: 30,
                    },
                  ]}
                  {...form.getInput("nigth_delivery")}
                  defaultValue={
                    user.information
                      ? user.information.nigth_delivery
                      : undefined
                  }
                />
              </View>
            </View>
          </ScrollView>
          <View
            style={[
              {
                alignItems: "center",
                width: "100%",
                height: hp(3),
                marginHorizontal: wp(2),
                justifyContent: "center",
                // marginLeft: hp(10),
                marginBottom: hp(1),
              },
            ]}
          >
            <TouchableOpacity
              onPress={() => props.navigation.navigate("CambiarContrasena")}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  fontSize: RFPercentage(2),
                  textAlign: "center",
                  color: colores.amarillo,
                  textAlignVertical: "center",
                }}
              >
                Cambiar Contraseña
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={[
              {
                // borderWidth: 1,
                alignItems: "center",
                width: "100%",
                height: hp(8),
                // marginHorizontal: wp(2),
                // marginLeft: hp(15),
                marginBottom: hp(17),
              },
            ]}
          >
            <CustomButton onPress={onSubmit}>
              <Text
                style={{
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  fontSize: RFPercentage(2),
                }}
              >
                Guardar
              </Text>
            </CustomButton>
          </View>
        </View>

        {/* <View style={{ flexDirection: "column", marginTop: hp(2) }}></View> */}
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    // justifyContent: "flex-start",
    // flex: 1,
  },
});
export default MiCuenta;
