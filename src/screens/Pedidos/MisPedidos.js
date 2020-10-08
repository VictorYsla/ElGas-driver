import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  FlatList,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { useDispatch } from "react-redux";
import BasicHeader from "../../components/Header/BasicHeader";
import AddressMarker from "../../components/Icons/AddressMarker";
import ChevronLeftIcon from "../../components/Icons/ChevronLeftIcon";
import ChevronRightIcon from "../../components/Icons/ChevronRightIcon";
import MoneyMarkerIcon from "../../components/Icons/MoneyMarker";
import StarIcon from "../../components/Icons/StarIcon";
import Container from "../../generales/Container";
import { actions } from "../../redux";
import { getCurrentDeliverys } from "../../apis/querys";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import MarkerIcon from "../../components/Icons/Marker";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";

import * as Notifications from "expo-notifications";
import {
  registerForPushNotificationsAsync,
  sendPushNotification,
} from "../../functions/Notificaciones";

const MisPedidos = (props) => {
  const [requested, setRequested] = useState(true);
  const [onTheWay, setOnTheWay] = useState(false);
  const [finished, setFinished] = useState(false);
  const [currentDeliverys, setCurrentDeliverys] = useState([]);
  const [location, setLocation] = useState({
    latitude: 74.0,
    longitude: -4.0,
  });
  const dispatch = useDispatch();

  useEffect(() => {
    const actualizarNavegacion = (ruta) =>
      dispatch(actions.actualizarUbicacion(ruta));
    actualizarNavegacion(props.route.name);
  }, []);

  useEffect(() => {
    GetCurrentLocation();
  }, []);
  async function GetCurrentLocation() {
    let { status } = await Location.requestPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
    }
    let location = await Location.getCurrentPositionAsync({});
    //console.log(location)
    setLocation({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });
  }

  useEffect(() => {
    // const type = requested?'Solicitado':onTheWay?'En camino': 'Terminado'
    const type = "Solicitado";
    // console.log('InuseEfect', type);
    getCurrentDeliverys("333333333333", type).then((response) => {
      console.log("response", response);
      const array = [];
      response.forEach((value) => {
        const obj = {
          date: `${new Date(value.fecha).getFullYear()}-${
            new Date(value.fecha).getMonth() + 1
          }-${new Date(value.fecha).getDate()}`,
          time: `23:35:21`,
          title: value.direccion.nombre,
          userName: value.nombre_cliente,
          payType: value.forma_pago,
          products: value.productos,
          id: value.id,
          pushToken: value.pushToken,
          ...value,
        };
        array.push(obj);
      });
      setCurrentDeliverys(array);
      console.log("Respo: ", array);
    });
  }, [requested, onTheWay, finished]);

  const dummy_data = [
    {
      user: "Manuel Córdova Galarza",
      date: new Date().toISOString(),
      id: "970",
    },
    {
      user: "Manuel Córdova Galarza",
      date: new Date().toISOString(),
      id: "969",
    },
    {
      user: "Manuel Córdova Galarza",
      date: new Date().toISOString(),
      id: "968",
    },
    {
      user: "Manuel Córdova Galarza",
      date: new Date().toISOString(),
      id: "967",
    },
    {
      user: "Manuel Córdova Galarza",
      date: new Date().toISOString(),
      id: "966",
    },
    {
      user: "Manuel Córdova Galarza",
      date: new Date().toISOString(),
      id: "965",
    },
    {
      user: "Manuel Córdova Galarza",
      date: new Date().toISOString(),
      id: "964",
    },
    {
      user: "Manuel Córdova Galarza",
      date: new Date().toISOString(),
      id: "963",
    },
  ];

  return (
    <Container styleContainer={styles.screen} navigation={props.navigation}>
      <BasicHeader
        icon={<ChevronLeftIcon height={15} width={15} />}
        title='Mis Pedidos'
      />
      <View
        style={{
          width: "100%",
          alignItems: "center",
          // backgroundColor: "red",
        }}
      >
        <View style={[styles.row, styles.tabsButtonsContainer]}>
          <HeaderTabButton
            active={requested}
            onPress={() => {
              if (onTheWay || finished) {
                setOnTheWay(false);
                setFinished(false);
                setRequested(true);
              }
            }}
          >
            <Text
              style={[
                styles.tabButtonLabel,
                { fontWeight: requested ? "bold" : "normal" },
              ]}
            >
              Solicitados
            </Text>
          </HeaderTabButton>

          <HeaderTabButton
            active={onTheWay}
            onPress={() => {
              if (requested || finished) {
                setRequested(false);
                setFinished(false);
                setOnTheWay(true);
              }
            }}
          >
            <Text
              style={[
                styles.tabButtonLabel,
                { fontWeight: onTheWay ? "bold" : "normal" },
              ]}
            >
              En Camino
            </Text>
          </HeaderTabButton>

          <HeaderTabButton
            active={finished}
            onPress={() => {
              if (requested || onTheWay) {
                setOnTheWay(false);
                setRequested(false);
                setFinished(true);
              }
            }}
          >
            <Text
              style={[
                styles.tabButtonLabel,
                { fontWeight: finished ? "bold" : "normal" },
              ]}
            >
              Finalizados
            </Text>
          </HeaderTabButton>
        </View>
      </View>
      {requested && currentDeliverys && (
        <View
          style={{
            flex: 1,
            width: "90%",
            paddingVertical: 10,
            paddingHorizontal: 20,
            height: "100%",
          }}
        >
          <FlatList
            data={currentDeliverys} //dummy_data
            renderItem={({ item }) => (
              <RequestedListItem item={item} navigation={props.navigation} />
            )}
            showsVerticalScrollIndicator={false}
          />
        </View>
      )}
      {onTheWay && currentDeliverys && (
        <View
          style={{
            width: "100%",
            paddingBottom: 10,
            paddingHorizontal: 20,
            height: "45%",
          }}
        >
          <FlatList
            data={currentDeliverys}
            renderItem={({ item }) => (
              <EnCaminoItem item={item} navigation={props.navigation} />
            )}
            showsVerticalScrollIndicator={false}
          />
        </View>
      )}
      {finished && currentDeliverys && (
        <View
          style={{
            flex: 1,
            width: wp(100),
            paddingHorizontal: 0,
            height: "100%",
            // marginHorizontal:wp(2)
          }}
        >
          <FlatList
            data={currentDeliverys}
            contentContainerStyle={[{ paddingVertical: 10 }]}
            renderItem={({ item }) => <FinishedItem item={item} />}
            showsVerticalScrollIndicator={false}
          />
        </View>
      )}
      {onTheWay && (
        <View
          style={[
            {
              flex: 1,
              /* backgroundColor: "red", */ height: "100%",
              width: "100%",
            },
          ]}
        >
          <MapView
            style={{ flex: 1 }}
            initialRegion={{
              ...location,
              latitudeDelta: 0.2,
              longitudeDelta: 0.2,
            }}
            showsMyLocationButton
            showsUserLocation
          >
            <Marker coordinate={location}>
              <MarkerIcon width={wp(20)} height={hp(4)} />
            </Marker>
          </MapView>
        </View>
      )}
    </Container>
  );
};

// Finalizados List Item
const FinishedItem = ({ item }) => {
  const date = item.date;
  const formattedTime = item.time;
  const navigation = useNavigation();
  console.log("Item; ", item);

  return (
    <TouchableNativeFeedback
      onPress={() =>
        navigation.navigate("DetalleEnCamino", {
          item: {
            ...item,
            // title: "N73",
            // payType: "Efectivo",
            // product: { name: "Gas 15Kg", price: 1.6, qty: 5 },
          },
        })
      }
    >
      <View
        style={[
          {
            marginVertical: 0,
            width: wp(100),
            flex: 1,
            marginHorizontal: wp(5),
          },
        ]}
      >
        <View
          style={[
            styles.row,
            { justifyContent: "space-between", marginVertical: 5 },
          ]}
        >
          <View style={{ flex: 5 }}>
            <Text style={styles.user}>{item.userName}</Text>
            <View style={[styles.row, { justifyContent: "space-between" }]}>
              <Text style={[styles.label]}>{`${date}`}</Text>
              <Text style={[styles.label]}>{formattedTime}</Text>
            </View>
          </View>
          <View
            style={{
              // alignItems: "center",
              justifyContent: "flex-end",
              flex: 2,
              marginLeft: wp(3.3),
            }}
          >
            <Text style={styles.label}>ID {item.id}</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              flex: 1,
            }}
          >
            <ChevronRightIcon height={15} width={15} />
          </View>
        </View>
        <View
          style={[
            {
              width: "40%",
              flexDirection: "row",
            },
          ]}
        >
          <View>
            <StarIcon width={15} height={15} />
          </View>
          <View style={[{ marginLeft: 5 }]}>
            <StarIcon width={15} height={15} />
          </View>
          <View style={[{ marginLeft: 5 }]}>
            <StarIcon width={15} height={15} />
          </View>
          <View style={[{ marginLeft: 5 }]}>
            <StarIcon width={15} height={15} />
          </View>
          <View style={[{ marginLeft: 5 }]}>
            <StarIcon width={15} height={15} />
          </View>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

// Solicitados List Item
const RequestedListItem = ({ item, navigation }) => {
  const date = item.date;
  const formattedTime = item.time;
  // console.log('itm', item);

  return (
    <TouchableNativeFeedback
      onPress={() =>
        navigation.navigate("DetalleSolicitado", {
          item: {
            ...item /* 
            title: "N73",
            payType: "Efectivo",
            product: { name: "Gas 15Kg", price: 1.6, qty: 5 }, */,
          },
        })
      }
    >
      <View
        style={[
          styles.row,
          {
            justifyContent: "space-between",
            marginVertical: 10,
          },
        ]}
      >
        <View style={{ width: "50%" }}>
          <Text style={styles.user}>N73</Text>
          <View style={[styles.row, { justifyContent: "space-between" }]}>
            <Text style={[styles.label]}>{`${date}`}</Text>
            <Text style={[styles.label]}>{formattedTime}</Text>
          </View>
        </View>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <ChevronRightIcon height={15} width={15} />
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

// En Camino List Item
const EnCaminoItem = ({ item, navigation }) => {
  // const date = item.date.split("T");
  // const formattedTime = date[1].substring(0, 8);
  const date = item.date;
  const formattedTime = item.time;

  return (
    <TouchableNativeFeedback
      onPress={() =>
        navigation.navigate("DetalleEnCamino", {
          item: {
            ...item,
            title: "N73",
            payType: "Efectivo",
            product: { name: "Gas 15Kg", price: 1.6, qty: 5 },
          },
        })
      }
    >
      <View style={[{ marginVertical: 10 }]}>
        <View
          style={[
            styles.row,
            { justifyContent: "space-between", marginVertical: 5 },
          ]}
        >
          <View>
            <Text style={styles.user}>{item.userName}</Text>
            <View style={[styles.row, { justifyContent: "space-between" }]}>
              <Text style={[styles.label]}>{`${date}`}</Text>
              <Text style={[styles.label]}>{formattedTime}</Text>
            </View>
          </View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={styles.label}>ID {item.id}</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <ChevronRightIcon height={15} width={15} />
            <AddressMarker height={40} width={40} />
            <MoneyMarkerIcon height={40} width={40} />
          </View>
        </View>
        <View
          style={[
            {
              width: "40%",
              flexDirection: "row",
            },
          ]}
        >
          <View>
            <StarIcon width={15} height={15} />
          </View>
          <View style={[{ marginLeft: 5 }]}>
            <StarIcon width={15} height={15} />
          </View>
          <View style={[{ marginLeft: 5 }]}>
            <StarIcon width={15} height={15} />
          </View>
          <View style={[{ marginLeft: 5 }]}>
            <StarIcon width={15} height={15} />
          </View>
          <View style={[{ marginLeft: 5 }]}>
            <StarIcon width={15} height={15} />
          </View>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

const HeaderTabButton = (props) => {
  return (
    <TouchableNativeFeedback onPress={() => props.onPress()}>
      <View
        style={[
          styles.tabButtonContainer,
          {
            borderBottomColor: props.active ? "#FFB500" : "transparent",
            borderBottomWidth: 2,
          },
        ]}
      >
        {props.children}
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#fff",
    // alignItems: "center",
  },
  row: {
    flexDirection: "row",
  },
  tabsButtonsContainer: {
    height: 50,
    backgroundColor: "#2E2E2D",
    width: "100%",
  },
  tabButtonContainer: {
    width: "33%",
    alignItems: "center",
    justifyContent: "center",
  },
  tabButtonLabel: {
    color: "#fff",
  },
  user: {
    fontWeight: "bold",
    fontSize: RFPercentage(2.4),
  },
  label: {
    fontSize: RFPercentage(2.4),
  },
});
export default MisPedidos;
