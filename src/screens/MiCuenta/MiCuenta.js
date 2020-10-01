import React, { useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, TextInput } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { useDispatch } from "react-redux";
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
import {getCurrentDeliverys, getDeliverys} from '../../apis/querys'

const initialValues = { dni: "", name:'', dni:'', phone:'', email:'', day_delivery:'', nigth_delivery:'' };

const MiCuenta = (props) => {
  const { screenHeight } = pantalla;

  const form = useForm({ initialValues });

  const dispatch = useDispatch();

  useEffect(() => {
    getCurrentDeliverys('333333333333')
    .then((response)=>{
      console.log('Resposne: ', response);
    })
    getDeliverys()
    .then((response)=>{
      console.log('Resposne2: ', response);
    })
    const actualizarRuta = (ruta) =>
      dispatch(actions.actualizarUbicacion(ruta));
    actualizarRuta(props.route.name);
  }, []);
  // console.log('Form: ', form.fields);

  return (
    <Container styleContainer={[styles.screen]} navigation={props.navigation}>
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
            justifyContent: screenHeight <= 592 ? "flex-start" : "center",
          },
        ]}
      >
        <Text
          style={[
            {
              fontWeight: "bold",
              fontSize: RFPercentage(2.2),
              marginVertical: 10,
            },
          ]}
        >
          Mi información
        </Text>

        {/* Form Wrapper */}
        <View style={[{ height: "70%", width: "80%" }]}>
          <ScrollView>
            <View
              style={[
                {
                  flexDirection: "row",
                  alignItems: "center",
                  width: "80%",
                  marginVertical: 15,
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
                      height: 25,
                    },
                  ]}
                  {...form.getInput('name')}
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
                  style={[
                    {
                      width: 200,
                      borderBottomColor: "#000",
                      borderBottomWidth: 1,
                      fontSize: RFPercentage(2.4),
                      paddingVertical: 5,
                      height: 25,
                    },
                  ]}
                  {...form.getInput('dni')}
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
                  style={[
                    {
                      width: 200,
                      borderBottomColor: "#000",
                      borderBottomWidth: 1,
                      fontSize: RFPercentage(2.4),
                      paddingVertical: 5,
                      height: 25,
                    },
                  ]}
                  {...form.getInput('phone')}
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
                  style={[
                    {
                      width: 200,
                      borderBottomColor: "#000",
                      borderBottomWidth: 1,
                      fontSize: RFPercentage(2.4),
                      paddingVertical: 5,
                      height: 25,
                    },
                  ]}
                  {...form.getInput('email')}
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
                      height: 25,
                    },
                  ]}
                  {...form.getInput('day_delivery')}
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
                  style={[{ fontWeight: "bold", fontSize: RFPercentage(2.2) }]}
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
                      height: 25,
                    },
                  ]}
                  {...form.getInput('nigth_delivery')}
                />
              </View>
            </View>
          </ScrollView>
        </View>

        <View
          style={[
            {
              width: screenHeight <= 592 ? 200 : 225,
              height: screenHeight <= 592 ? 8 : 50,
              marginTop: screenHeight <= 592 ? 10 : 40,
            },
          ]}
        >
          <CustomButton
            onPress={() => props.navigation.navigate("CambiarContrasena")}
          >
            <Text
              style={{
                fontWeight: "bold",
                textTransform: "uppercase",
                fontSize: RFPercentage(2.2),
              }}
            >
              Cambiar Contraseña
            </Text>
          </CustomButton>
        </View>
        <View
          style={[
            {
              width: screenHeight <= 592 ? 200 : 225,
              height: screenHeight <= 592 ? 8 : 50,
              marginTop: screenHeight <= 592 ? 40 : 10,
              marginBottom: 10,
            },
          ]}
        >
          <CustomButton>
            <Text
              style={{
                fontWeight: "bold",
                textTransform: "uppercase",
                fontSize: RFPercentage(2.2),
              }}
            >
              Guardar
            </Text>
          </CustomButton>
        </View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",

    minHeight: 425,
  },
});
export default MiCuenta;
