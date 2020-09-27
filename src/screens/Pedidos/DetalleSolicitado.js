import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  FlatList,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import CustomButton from "../../components/CustomButton";
import BasicHeader from "../../components/Header/BasicHeader";
import ChevronLeftIcon from "../../components/Icons/ChevronLeftIcon";
import ChevronRightIcon from "../../components/Icons/ChevronRightIcon";

import Container from "../../generales/Container";

const DetalleSolicitado = (props) => {
  const fetchedItemData = props.route.params?.item;

  const date = fetchedItemData.date.split("T");
  const formattedTime = date[1].substring(0, 8);

  console.log(formattedTime);

  return (
    <Container styleContainer={styles.screen}>
      <BasicHeader
        icon={<ChevronLeftIcon height={20} width={20} />}
        title="Solicitado"
      />

      <View
        style={{
          flex: 1,
          width: "100%",
          paddingVertical: 20,
        }}
      >
        <View style={[{ width: "100%", paddingHorizontal: 20 }]}>
          <Text>Hora Solicitada: {formattedTime}</Text>
          <Text>Fecha Solicitada: {date[0]}</Text>
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
            <Text>Dirección de entrega</Text>
            <Text>Casa</Text>
            <Text>{fetchedItemData.title}</Text>
          </View>
          <ChevronRightIcon width={15} height={15} />
        </View>
        <View
          style={[
            {
              paddingHorizontal: 20,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            },
          ]}
        >
          <View>
            <Text>Forma de Pago</Text>
            <Text>{fetchedItemData.payType}</Text>
          </View>
          <ChevronRightIcon width={15} height={15} />
        </View>

        <View
          style={[
            {
              flexDirection: "row",
              justifyContent: "space-between",
              marginVertical: 10,
              paddingHorizontal: 20,
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
            <Text>{fetchedItemData.product.name}</Text>
            <Text>{fetchedItemData.product.price}</Text>
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
            <Text>{fetchedItemData.product.qty}</Text>
          </View>
        </View>

        {/* Summary */}

        <View
          style={[
            {
              backgroundColor: "#F2F2F2",
              alignItems: "center",
              paddingVertical: 10,
            },
          ]}
        >
          <Text>Subtotal: $1.60</Text>
          <Text>A domicilio: $2.00</Text>
          <Text>TOTAL: $10.00</Text>
        </View>

        <View
          style={[{ width: "100%", alignItems: "center", marginVertical: 20 }]}
        >
          <View
            style={[
              {
                width: 150,
                height: 30,
              },
            ]}
          >
            <CustomButton>
              <Text>ACEPTAR</Text>
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
  user: {
    fontWeight: "bold",
    fontSize: RFPercentage(2.4),
  },
  label: {
    fontSize: RFPercentage(2.4),
  },
});
export default DetalleSolicitado;
