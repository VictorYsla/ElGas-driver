import React, { useState } from "react";
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
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import CustomButton from "../../components/CustomButton";
import BasicHeader from "../../components/Header/BasicHeader";
import ChevronLeftIcon from "../../components/Icons/ChevronLeftIcon";
import ChevronRightIcon from "../../components/Icons/ChevronRightIcon";
import { sendPushNotification } from "../../functions/Notificaciones";
import { useSelector } from "react-redux";
import {updateAceptedDelivery} from '../../apis/querys'

import Container from "../../generales/Container";

const DetalleSolicitado = (props) => {
  const fetchedItemData = props.route.params?.item;
  const user = useSelector((state) => state.login.login);
  console.log("Recibido: ", fetchedItemData, user);
  const date = fetchedItemData.date;
  const formattedTime = fetchedItemData.time;
  const onConfirm = async() => {
    // await sendPushNotification(fetchedItemData.pushToken);
    const {id_doc} = fetchedItemData
    // console.log('fetchediwedir:  ', id_doc);
    updateAceptedDelivery(user, id_doc)

  }

  return (
    <Container styleContainer={styles.screen} navigation={props.navigation}>
      <BasicHeader
        icon={<ChevronLeftIcon height={20} width={20} />}
        title='Solicitado'
      />

      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
      >
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
              height: "45%",
              justifyContent: "center",
              marginTop: -hp(4),
            }}
          >
            <View style={[{ width: "100%", paddingHorizontal: 20 }]}>
              <Text>Hora Solicitada: {formattedTime}</Text>
              <Text>Fecha Solicitada: {date}</Text>
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
                <Text>{fetchedItemData.title}</Text>
                <Text>N72</Text>
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
                <Text>{fetchedItemData.userName} </Text>
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
                <Text>{fetchedItemData.payType}</Text>
              </View>
              <ChevronRightIcon width={15} height={15} />
            </View>
          </View>

          <ScrollView /* style={{ marginHorizontal: wp(5), marginTop: -hp(5) }} */
            contentContainerStyle={{
              flexGrow: 1,
            }}
          >
            {fetchedItemData.products.map((value, index) => {
              return (
                <>
                  <DeliveryItems
                    index={index}
                    name={value.name}
                    price={value.price}
                    quantity={value.quantity}
                    uri={value.image_url}
                  />
                </>
              );
            })}
          </ScrollView>

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
              { width: "100%", alignItems: "center", marginVertical: 10 },
            ]}
          >
            <View
              style={[
                {
                  width: 150,
                  height: 30,
                },
              ]}
            >
              <CustomButton
                onPress={() => {
                  onConfirm();
                }}
              >
                <Text style={[styles.title]}>ACEPTAR</Text>
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
