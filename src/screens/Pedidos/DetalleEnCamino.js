import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  FlatList,
  ScrollView,
  Image,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { useSelector } from "react-redux";
import { getCollectionBetween, updateAceptedDelivery } from "../../apis/querys";
import CustomButton from "../../components/CustomButton";
import BasicHeader from "../../components/Header/BasicHeader";
import ChevronLeftIcon from "../../components/Icons/ChevronLeftIcon";
import ChevronRightIcon from "../../components/Icons/ChevronRightIcon";
import { colores } from "../../constantes/Temas";
import { sendPushNotification } from "../../functions/Notificaciones";

import Container from "../../generales/Container";
import navigation from "../../redux/reducers/navigation";

const DetalleEnCamino = (props) => {
  const fetchedItemData = props.route.params?.item;
  const date = fetchedItemData.date;
  const formattedTime = fetchedItemData.time;
  const user = useSelector((state) => state.login.login);

  // console.log("fetchedItemData ", fetchedItemData);
  const status =
    fetchedItemData.orderStatus === "Terminado" ? "end" : undefined;

  // useEffect(() => {

  // }, []);

  const onConfirm = async () => {
    const { id_doc } = fetchedItemData;
    if (status) {
      props.navigation.push("MisPedidos");
    } else {
      try {
        updateAceptedDelivery(user, id_doc, "Terminado");
        props.navigation.push("MisPedidos");
      } catch (error) {
        alert("Ups, sucedió un error");
      }
    }
    // await sendPushNotification(fetchedItemData.pushToken, 'El conductor se encuentra fuera de su hogar', 'Favor salir a recibir su pedido' );
    // console.log('fetchediwedir:  ', id_doc);
  };

  return (
    <Container styleContainer={styles.screen} navigation={props.navigation}>
      <BasicHeader
        icon={<ChevronLeftIcon height={20} width={20} />}
        title={status ? "Finalizados" : "En Camino"}
      />

      <ScrollView>
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
              height: "50%",
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
                <Text style={[styles.label]}>Fecha Solicitada: {date}</Text>
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
                <Text style={[styles.label]}>{fetchedItemData.userName}</Text>
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
          </View>

          <View style={{ height: hp(18), marginBottom: hp(1.5) }}>
            <ScrollView style={{ marginHorizontal: wp(5), marginTop: -hp(5) }}>
              {fetchedItemData.products.map((value, index) => {
                return (
                  <>
                    <DeliveryItems
                      index={index}
                      name={value.category.name}
                      price={value.product.price}
                      quantity={value.quantity}
                      uri={value.product.photo_url}
                    />
                    {/* <DeliveryItems
                      index={index}
                      name={value.name}
                      price={value.price}
                      quantity={value.quantity}
                      uri={value.image_url}
                    />
                    <DeliveryItems
                      index={index}
                      name={value.name}
                      price={value.price}
                      quantity={value.quantity}
                      uri={value.image_url}
                    />
                    <DeliveryItems
                      index={index}
                      name={value.name}
                      price={value.price}
                      quantity={value.quantity}
                      uri={value.image_url}
                    />
                    <DeliveryItems
                      index={index}
                      name={value.name}
                      price={value.price}
                      quantity={value.quantity}
                      uri={value.image_url}
                    /> */}
                  </>
                );
              })}
            </ScrollView>
          </View>

          {/* Summary */}

          <View
            style={[
              {
                backgroundColor: "#F2F2F2",
                alignItems: "center",
                paddingVertical: 5,
                width: "100%",
                marginTop: 1,
              },
            ]}
          >
            <Text style={[styles.label, { marginVertical: 1 }]}>
              Subtotal: ${fetchedItemData.total - 2}
            </Text>
            <Text style={[styles.label, { marginVertical: 1 }]}>
              A domicilio: $2.00
            </Text>
            <Text style={[styles.label, { marginVertical: 1 }]}>
              TOTAL:{" "}
              <Text style={[styles.productLabel]}>
                ${fetchedItemData.total}
              </Text>
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
            {!status && (
              <View
                style={[
                  {
                    width: wp(40),
                    height: hp(5),
                  },
                ]}
              >
                <CustomButton
                  onPress={() =>
                    sendPushNotification(
                      fetchedItemData.pushToken,
                      "El conductor se encuentra fuera de su hogar",
                      "Favor salir a recibir su pedido"
                    )
                  }
                >
                  <Text style={[styles.title]}>ESTOY AFUERA</Text>
                </CustomButton>
              </View>
            )}
            <View
              style={[
                {
                  width: wp(40),
                  height: hp(5),
                },
              ]}
            >
              <CustomButton onPress={onConfirm}>
                <Text style={[styles.title]}>
                  {status ? "REGRESAR" : "FINALIZAR"}
                </Text>
              </CustomButton>
            </View>
          </View>
        </View>
      </ScrollView>
    </Container>
  );
};

const DeliveryItems = ({
  name = "Item",
  price = 0.0,
  quantity = 3,
  index,
  uri,
}) => {
  // console.log("Props", uri);
  return (
    <View
      style={[
        {
          flexDirection: "row",
          justifyContent: "space-between",
          marginVertical: 5,
        },
      ]}
      key={index}
    >
      <View
        style={[
          { width: "20%", alignItems: "center", justifyContent: "center" },
        ]}
      >
        <Image
          source={{ uri: uri }}
          style={{ width: wp(10), height: hp(5) }}
          width={wp(10)}
          height={hp(5)}
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
        <Text style={styles.title}>{name} </Text>
        <Text style={styles.productLabel}>${price}</Text>
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
        <Text style={styles.productLabel}>{quantity}</Text>
      </View>
    </View>
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
export default DetalleEnCamino;
