import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  FlatList,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import CustomButton from "../../components/CustomButton";
import BasicHeader from "../../components/Header/BasicHeader";
import ChevronLeftIcon from "../../components/Icons/ChevronLeftIcon";
import ChevronRightIcon from "../../components/Icons/ChevronRightIcon";
import { colores } from "../../constantes/Temas";

import Container from "../../generales/Container";

const DetalleSolicitado = (props) => {
  const fetchedItemData = props.route.params?.item;

  const date = fetchedItemData.date.split("T");
  const formattedTime = date[1].substring(0, 8);

  return (
    <Container styleContainer={styles.screen} navigation={props.navigation}>
      <BasicHeader
        icon={<ChevronLeftIcon height={20} width={20} />}
        title="Solicitado"
      />

      <View
        style={[
          {
            height: "100%",
            width: "100%",
            alignItems: "center",
            paddingVertical: 10,
          },
        ]}
      >
        <View
          style={{
            width: "80%",
            height: "60%",
            justifyContent: "center",
          }}
        >
          <View
            style={[
              { width: "100%", flexDirection: "row", paddingHorizontal: 20 },
            ]}
          >
            <View>
              <Text style={[styles.label]}>
                Hora Solicitada: {formattedTime}
              </Text>
              <Text style={[styles.label]}>Fecha Solicitada: {date[0]}</Text>
            </View>
            <View>
              <View
                style={[
                  {
                    backgroundColor: colores.amarillo,
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 10,
                    borderRadius: 10,
                    marginLeft: 40,
                  },
                ]}
              >
                <Text style={[{ color: "#fff" }]}>29:45</Text>
              </View>
            </View>
          </View>

          <View
            style={[
              {
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginVertical: 10,
                paddingHorizontal: 20,
              },
            ]}
          >
            <View>
              <Text style={styles.title}>Dirección de entrega</Text>
              <Text style={[styles.label]}>Casa</Text>
              <Text style={[styles.label]}>{fetchedItemData.title}</Text>
            </View>
            <ChevronRightIcon width={15} height={15} />
          </View>

          <View
            style={[
              {
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginVertical: 10,
                paddingHorizontal: 20,
              },
            ]}
          >
            <View>
              <Text style={styles.title}>Datos de facturación</Text>
              <Text style={[styles.label]}>Silvester Stalone</Text>
            </View>
            <ChevronRightIcon width={15} height={15} />
          </View>
          <View
            style={[
              {
                marginVertical: 10,
                paddingHorizontal: 20,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              },
            ]}
          >
            <View>
              <Text style={styles.title}>Forma de Pago</Text>
              <Text style={[styles.label]}>{fetchedItemData.payType}</Text>
            </View>
            <ChevronRightIcon width={15} height={15} />
          </View>

          <View
            style={[
              {
                flexDirection: "row",
                justifyContent: "space-between",
                marginVertical: 5,
              },
            ]}
          >
            <View style={[{ width: "20%", alignItems: "center" }]}>
              <View
                style={[{ backgroundColor: "blue", height: 50, width: 25 }]}
              />
            </View>
            <View
              style={[
                {
                  width: "60%",
                  justifyContent: "center",
                },
              ]}
            >
              <Text style={styles.title}>{fetchedItemData.product.name}</Text>
              <Text style={styles.productLabel}>
                ${fetchedItemData.product.price}
              </Text>
            </View>
            <View
              style={[
                {
                  width: "20%",

                  justifyContent: "center",
                  alignItems: "center",
                },
              ]}
            >
              <Text style={styles.productLabel}>
                {fetchedItemData.product.qty}
              </Text>
            </View>
          </View>
        </View>

        {/* Summary */}

        <View
          style={[
            {
              backgroundColor: "#F2F2F2",
              alignItems: "center",
              paddingVertical: 5,
              width: "100%",
              marginTop: 20,
            },
          ]}
        >
          <Text style={[styles.label, { marginVertical: 1 }]}>
            Subtotal: $1.60
          </Text>
          <Text style={[styles.label, { marginVertical: 1 }]}>
            A domicilio: $2.00
          </Text>
          <Text style={[styles.label, { marginVertical: 1 }]}>
            TOTAL: <Text style={[styles.productLabel]}>$10.00</Text>
          </Text>
        </View>

        <View
          style={[
            {
              width: "100%",
              alignItems: "center",
              marginVertical: 20,
              flexDirection: "row",
              justifyContent: "space-evenly",
            },
          ]}
        >
          <View
            style={[
              {
                width: wp(40),
                height: hp(5),
              },
            ]}
          >
            <CustomButton>
              <Text style={[styles.title]}>ESTOY AFUERA</Text>
            </CustomButton>
          </View>
          <View
            style={[
              {
                width: wp(40),
                height: hp(5),
              },
            ]}
          >
            <CustomButton>
              <Text style={[styles.title]}>FINALIZAR</Text>
            </CustomButton>
          </View>
        </View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#fff",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
  },
  label: {
    fontSize: RFPercentage(2.2),
  },
  title: {
    fontWeight: "bold",
    fontSize: RFPercentage(2.2),
  },
  productLabel: {
    fontWeight: "bold",
    fontSize: RFPercentage(3),
  },
});
export default DetalleSolicitado;
