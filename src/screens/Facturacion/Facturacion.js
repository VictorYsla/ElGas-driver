import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

import BasicHeader from "../../components/Header/BasicHeader";
import ChevronLeftIcon from "../../components/Icons/ChevronLeftIcon";
import Container from "../../generales/Container";
import CalendarDriverIcon from "../../components/Icons/CalendarDriver";
import { FlatList } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import { actions } from "../../redux";

const Facturacion = (props) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showStartCalendar, setShowStartCalendar] = useState(false);
  const [showEndCalendar, setShowEndCalendar] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const actualizarNavegacion = (ruta) =>
      dispatch(actions.actualizarUbicacion(ruta));
    actualizarNavegacion(props.route.name);
  }, []);

  const onChangeStartDate = (event, selectedDate) => {
    const currentDate = selectedDate || startDate;
    setShowStartCalendar(Platform.OS === "ios");
    setStartDate(currentDate);
  };

  const onChangeEndDate = (event, selectedDate) => {
    const currentDate = selectedDate || endDate;
    setShowEndCalendar(Platform.OS === "ios");
    setEndDate(currentDate);
  };

  const onShowStartCalendar = () => {
    setShowStartCalendar(true);
  };
  const onShowEndCalendar = () => {
    setShowEndCalendar(true);
  };

  return (
    <Container navigation={props.navigation}>
      <BasicHeader
        title="Facturación"
        icon={<ChevronLeftIcon width={15} height={15} />}
      />
      <View style={[styles.content]}>
        <View
          style={[
            {
              width: "100%",
              paddingVertical: 10,
              backgroundColor: "#F2F2F2",
              alignItems: "center",
              justifyContent: "center",
              marginVertical: 10,
            },
          ]}
        >
          <Text>Arriendado por pagar</Text>
          <Text>$00.00</Text>
        </View>
        <View
          style={[
            {
              width: "100%",
              paddingVertical: 10,
              backgroundColor: "#F2F2F2",
              alignItems: "center",
              justifyContent: "center",
              marginVertical: 10,
            },
          ]}
        >
          <Text>Tus ganancias</Text>
          <Text>$11.90</Text>
        </View>

        <View
          style={[
            {
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-around",
            },
          ]}
        >
          <View
            style={[
              {
                flexDirection: "row",
              },
            ]}
          >
            <Text>Desde: </Text>
            <Text>
              {`${startDate.getDate()}-${
                startDate.getMonth() + 1
              }-${startDate.getFullYear()}`}
            </Text>
            <TouchableOpacity activeOpacity={0.6} onPress={onShowStartCalendar}>
              <CalendarDriverIcon width={20} height={20} />
            </TouchableOpacity>
          </View>

          <View style={[{ flexDirection: "row" }]}>
            <Text>Hasta: </Text>
            <Text>
              {`${endDate.getDate()}-${
                endDate.getMonth() + 1
              }-${endDate.getFullYear()}`}
            </Text>
            <TouchableOpacity activeOpacity={0.6} onPress={onShowEndCalendar}>
              <CalendarDriverIcon width={20} height={20} />
            </TouchableOpacity>
          </View>

          {showStartCalendar && (
            <DateTimePicker
              testID="dateTimePicker"
              value={startDate}
              mode="date"
              display="calendar"
              onChange={onChangeStartDate}
              locale="es-ES"
            />
          )}
          {showEndCalendar && (
            <DateTimePicker
              testID="dateTimePicker"
              value={endDate}
              mode="date"
              display="calendar"
              onChange={onChangeEndDate}
              locale="es-ES"
            />
          )}
        </View>

        {/* Full Table */}
        <View>
          {/* Header */}
          <View
            style={[
              {
                flexDirection: "row",
                justifyContent: "space-between",
                backgroundColor: "#F2F2F2",
                marginTop: 20,
              },
            ]}
          >
            <View style={[{ alignItems: "center", flex: 1 }]}>
              <Text>ID</Text>
            </View>
            <View style={[{ alignItems: "center", flex: 1 }]}>
              <Text>Fecha</Text>
            </View>
            <View style={[{ alignItems: "center", flex: 1 }]}>
              <Text>Distribuidor</Text>
            </View>
          </View>
          {/* Body */}
          <FlatList
            data={[
              { id: 970, fecha: "2020/06/30", distribuidor: 14.0 },
              { id: 969, fecha: "2020/06/30", distribuidor: 14.0 },
              { id: 968, fecha: "2020/06/30", distribuidor: 14.0 },
              { id: 967, fecha: "2020/06/30", distribuidor: 14.0 },
              { id: 966, fecha: "2020/06/30", distribuidor: 14.0 },
              { id: 965, fecha: "2020/06/30", distribuidor: 14.0 },
              { id: 964, fecha: "2020/06/30", distribuidor: 14.0 },
            ]}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View
                style={[
                  { flexDirection: "row", justifyContent: "space-between" },
                ]}
              >
                <View style={[{ alignItems: "center", flex: 1 }]}>
                  <Text>{item.id}</Text>
                </View>
                <View style={[{ alignItems: "center", flex: 1 }]}>
                  <Text>{item.fecha}</Text>
                </View>
                <View style={[{ alignItems: "center", flex: 1 }]}>
                  <Text>{item.distribuidor}</Text>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    width: "100%",
    paddingVertical: 10,
    height: "100%",
  },
});
export default Facturacion;
