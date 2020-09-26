import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
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

const initialValues = { dni: "" };

const MiCuenta = (props) => {
  const { screenHeight } = pantalla;

  const form = useForm({ initialValues });

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
            <Text style={[{ fontWeight: "bold", fontSize: RFPercentage(2.2) }]}>
              Nombre y Apellido
            </Text>
            <Text style={[{ fontSize: RFPercentage(2.2) }]}>
              Patricio Hidrovo
            </Text>
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
            <Text style={[{ fontWeight: "bold", fontSize: RFPercentage(2.2) }]}>
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
          style={[{ flexDirection: "row", alignItems: "center", width: "80%" }]}
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
            <Text style={[{ fontWeight: "bold", fontSize: RFPercentage(2.2) }]}>
              Número de identificación
            </Text>
            <Text style={[{ fontSize: RFPercentage(2.2) }]}>170885522</Text>
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
            <Text style={[{ fontWeight: "bold", fontSize: RFPercentage(2.2) }]}>
              Número de celular
            </Text>
            <Text style={[{ fontSize: RFPercentage(2.2) }]}>096257845</Text>
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
              <EmailIcon width="100%" height="100%" color={colores.bgOscuro} />
            </View>
          </View>
          <View>
            <Text style={[{ fontWeight: "bold", fontSize: RFPercentage(2.2) }]}>
              E-Mail
            </Text>
            <Text style={[{ fontSize: RFPercentage(2.2) }]}>
              fernando@gmail.com
            </Text>
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
            <Text style={[{ fontWeight: "bold", fontSize: RFPercentage(2.2) }]}>
              Costo domicilio día
            </Text>
            <Text style={[{ fontSize: RFPercentage(2.2) }]}>$2</Text>
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
            <Text style={[{ fontWeight: "bold", fontSize: RFPercentage(2.2) }]}>
              Costo domicilio noche
            </Text>
            <Text style={[{ fontSize: RFPercentage(2.2) }]}>$2.50</Text>
          </View>
        </View>

        <View
          style={[
            {
              width: screenHeight <= 592 ? 200 : 225,
              height: screenHeight <= 592 ? 10 : 50,
              marginTop: screenHeight <= 592 ? 10 : 40,
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
              Cambiar Contraseña
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
  },
});
export default MiCuenta;
