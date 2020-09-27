import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  FlatList,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import BasicHeader from "../../components/Header/BasicHeader";
import AddressMarker from "../../components/Icons/AddressMarker";
import ChevronLeftIcon from "../../components/Icons/ChevronLeftIcon";
import ChevronRightIcon from "../../components/Icons/ChevronRightIcon";
import MoneyMarkerIcon from "../../components/Icons/MoneyMarker";
import StarIcon from "../../components/Icons/StarIcon";

import Container from "../../generales/Container";

const MisPedidos = (props) => {
  const [requested, setRequested] = useState(true);
  const [onTheWay, setOnTheWay] = useState(false);
  const [finished, setFinished] = useState(false);

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
    <Container styleContainer={styles.screen}>
      <BasicHeader
        icon={<ChevronLeftIcon height={20} width={20} />}
        title="Mis Pedidos"
      />
      <View
        style={{
          height: "10%",
          width: "100%",
          alignItems: "center",
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
      {requested && (
        <View
          style={{
            flex: 1,
            width: "90%",
            padding: 20,
            height: "40%",
          }}
        >
          <FlatList
            data={dummy_data}
            renderItem={({ item }) => (
              <RequestedListItem item={item} navigation={props.navigation} />
            )}
            showsVerticalScrollIndicator={false}
          />
        </View>
      )}
      {onTheWay && (
        <View
          style={{
            width: "100%",
            padding: 20,
            paddingHorizontal: 20,
            height: "40%",
          }}
        >
          <FlatList
            data={dummy_data}
            renderItem={({ item }) => <EnCaminoItem item={item} />}
            showsVerticalScrollIndicator={false}
          />
        </View>
      )}
      {finished && (
        <View
          style={{
            flex: 1,
            width: "90%",
            paddingHorizontal: 20,
            height: "40%",
          }}
        >
          <FlatList
            data={dummy_data}
            renderItem={({ item }) => <ListItem item={item} />}
            showsVerticalScrollIndicator={false}
          />
        </View>
      )}
      <View
        style={[
          { flex: 1, backgroundColor: "red", height: "100%", width: "100%" },
        ]}
      ></View>
    </Container>
  );
};

// Solicitados List Item
const RequestedListItem = ({ item, navigation }) => {
  const date = item.date.split("T");
  const formattedTime = date[1].substring(0, 8);

  return (
    <TouchableNativeFeedback
      onPress={() =>
        navigation.navigate("DetalleSolicitado", {
          item: {
            ...item,
            title: "N73",
            payType: "Efectivo",
            product: { name: "Gas 15Kg", price: 1.6, qty: 5 },
          },
        })
      }
    >
      <View
        style={[
          styles.row,
          { justifyContent: "space-between", marginVertical: 10 },
        ]}
      >
        <View>
          <Text style={styles.user}>N73</Text>
          <View style={[styles.row, { justifyContent: "space-between" }]}>
            <Text style={[styles.label]}>{`${date[0]}`}</Text>
            <Text>{formattedTime}</Text>
          </View>
        </View>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <ChevronRightIcon width={15} height={15} />
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

// En Camino List Item
const EnCaminoItem = ({ item }) => {
  const date = item.date.split("T");
  const formattedTime = date[1].substring(0, 8);

  return (
    <View>
      <View
        style={[
          styles.row,
          { justifyContent: "space-between", marginVertical: 10 },
        ]}
      >
        <View>
          <Text style={styles.user}>{item.user}</Text>
          <View style={[styles.row, { justifyContent: "space-between" }]}>
            <Text style={[styles.label]}>{`${date[0]}`}</Text>
            <Text>{formattedTime}</Text>
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
  );
};
// Finalizados List Item

const ListItem = ({ item }) => {
  const date = item.date.split("T");
  const formattedTime = date[1].substring(0, 8);

  return (
    <View
      style={[
        styles.row,
        { justifyContent: "space-between", marginVertical: 10 },
      ]}
    >
      <View>
        <Text style={styles.user}>{item.user}</Text>
        <View style={[styles.row, { justifyContent: "space-between" }]}>
          <Text style={[styles.label]}>{`${date[0]}`}</Text>
          <Text>{formattedTime}</Text>
        </View>
      </View>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text style={styles.label}>ID {item.id}</Text>
      </View>
    </View>
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
    alignItems: "center",
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
