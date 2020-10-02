import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  FlatList, ActivityIndicator
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import CustomButton from "../../components/CustomButton";
import BasicHeader from "../../components/Header/BasicHeader";
import ChevronLeftIcon from "../../components/Icons/ChevronLeftIcon";
import ChevronRightIcon from "../../components/Icons/ChevronRightIcon";
import Container from "../../generales/Container";
import {
  getCurrentDeliverys,
  getDeliverys,
  postCollection,
} from "../../apis/querys";

const DetalleSolicitado = (props) => {
  const fetchedItemData = props.route.params?.item;
  const date = fetchedItemData.date.split("T");
  const formattedTime = date[1].substring(0, 8);
  const [currentDelivery, setCurrentDelivery] = useState(null)
  useEffect(()=>{
    console.log('wyefdywetd');
    getCurrentDeliverys('333333333333')
    .then((response)=>{
      if (response.length>0){
        const date = `${new Date(response[0].fecha).getFullYear()}-${new Date(response[0].fecha).getMonth()+1}-${new Date(response[0].fecha).getDate()}`
        const hour = `${new Date(response[0].fecha).getHours()}:${new Date(response[0].fecha).getUTCMinutes()}:${new Date(response[0].fecha).getSeconds()} `
        const obj ={ ...response[0], fecha: date, hora: hour}
        console.log('Resposne in mis pedidos: ', obj);
        setCurrentDelivery(obj)
      }
    })
  },[])

  return (
    <Container styleContainer={styles.screen} navigation={props.navigation}>
      {
        currentDelivery?
        <>
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
            <View style={[{ width: "100%", paddingHorizontal: 20 }]}>
              <Text>Hora Solicitada: {currentDelivery.hora}</Text>
              <Text>Fecha Solicitada: {currentDelivery.fecha}</Text>
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
                <Text>{currentDelivery.direccion.nombre} </Text>
                <Text>{fetchedItemData.title}</Text>
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
                <Text>{currentDelivery.nombre_cliente} </Text>
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
                <Text>{currentDelivery.forma_pago}</Text>
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
                <Text style={styles.title}>{currentDelivery.productos[0].name}</Text>
                <Text style={styles.productLabel}>
                  ${currentDelivery.productos[0].price}
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
                  {currentDelivery.productos[0].quantity}
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

          <View style={[{ width: "100%", alignItems: "center", marginTop: 15 }]}>
            <View
              style={[
                {
                  width: 150,
                  height: 30,
                },
              ]}
            >
              <CustomButton>
                <Text style={[styles.title]}>ACEPTAR</Text>
              </CustomButton>
            </View>
          </View>
        </View>
        </>
        :
        <ActivityIndicator/>
      }
      
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
    fontSize: RFPercentage(2.4),
  },
  title: {
    fontWeight: "bold",
    fontSize: RFPercentage(2.4),
  },
  productLabel: {
    fontWeight: "bold",
    fontSize: RFPercentage(3),
  },
});
export default DetalleSolicitado;
