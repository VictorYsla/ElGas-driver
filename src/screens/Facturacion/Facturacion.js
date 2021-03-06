import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

import BasicHeader from "../../components/Header/BasicHeader";
import ChevronLeftIcon from "../../components/Icons/ChevronLeftIcon";
import Container from "../../generales/Container";
import CalendarDriverIcon from "../../components/Icons/CalendarDriver";
import { FlatList } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../redux";
import { RFPercentage } from "react-native-responsive-fontsize";
import moment from "moment";
import { milisegundos } from "../../functions/dateChange";
import { getCollectionFacturacion } from "../../apis/querys";

const Facturacion = (props) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(Date.now());
  const [showStartCalendar, setShowStartCalendar] = useState(false);
  const [showEndCalendar, setShowEndCalendar] = useState(false);
  const [factura, setFactura] = useState([]);

  // const factura = useSelector((state) => state.factura.factura);
  const user = useSelector((state) => state.login.login);

  console.log("factura:", factura);

  const dispatch = useDispatch();

  useEffect(() => {
    const actualizarNavegacion = (ruta) =>
      dispatch(actions.actualizarUbicacion(ruta));
    actualizarNavegacion(props.route.name);

    const date = milisegundos(startDate);
    const dateUntil = milisegundos(endDate);

    const pedidosFinalizados = async () => {
      await getCollectionFacturacion(
        "plant_pedidos_en_camino",
        "Terminado",
        date,
        user.uid
      ).then((response) => {
        // dispatch(actions.actualizarFacturacion(response));
        // console.log("respnse:", response);
        const arrayMap = response.filter(
          (i) => i.date_miliseconds <= dateUntil
        );
        setFactura(arrayMap);
      });
    };

    pedidosFinalizados();
  }, [startDate, endDate]);

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
          <Text style={[styles.label]}>Arriendado por pagar</Text>
          <Text style={[styles.number]}>$00.00</Text>
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
          <Text style={[styles.label]}>Tus ganancias</Text>
          <Text style={[styles.number]}>$11.90</Text>
        </View>

        <View
          style={[
            {
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-around",
              marginVertical: 15,
            },
          ]}
        >
          <View
            style={[
              {
                flexDirection: "row",
                alignItems: "center",
              },
            ]}
          >
            <Text style={[styles.label]}>Desde: </Text>
            <Text style={[styles.label]}>
              {/* {`${startDate.getDate()}-${
                startDate.getMonth() + 1
              }-${startDate.getFullYear()}`} */}
              {moment(startDate).format("DD/MM/YYYY")}
            </Text>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={onShowStartCalendar}
              style={[{ marginLeft: 10 }]}
            >
              <CalendarDriverIcon width={20} height={20} />
            </TouchableOpacity>
          </View>

          <View style={[{ flexDirection: "row", alignItems: "center" }]}>
            <Text style={[styles.label]}>Hasta: </Text>
            <Text style={[styles.label]}>
              {/* {`${endDate.getDate()}-${
                endDate.getMonth() + 1
              }-${endDate.getFullYear()}`} */}
              {moment(endDate).format("DD/MM/YYYY")}
            </Text>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={onShowEndCalendar}
              style={[{ marginLeft: 10 }]}
            >
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
        <View style={[{ flex: 1 }]}>
          {/* Header */}
          <View
            style={[
              {
                flexDirection: "row",
                justifyContent: "space-between",
                backgroundColor: "#F2F2F2",
                // marginTop: 20,
                paddingVertical: 5,
              },
            ]}
          >
            <View style={[{ alignItems: "center", flex: 1 }]}>
              <Text style={[styles.label]}>Número</Text>
            </View>
            <View style={[{ alignItems: "center", flex: 1 }]}>
              <Text style={[styles.label]}>Fecha</Text>
            </View>
            <View style={[{ alignItems: "center", flex: 1 }]}>
              <Text style={[styles.label]}>Hora</Text>
            </View>
          </View>
          {/* Body */}
          <FlatList
            data={
              //   [
              //   { id: 970, fecha: "2020/06/30", distribuidor: 14.0 },
              //   { id: 969, fecha: "2020/06/30", distribuidor: 14.0 },
              //   { id: 968, fecha: "2020/06/30", distribuidor: 14.0 },
              //   { id: 967, fecha: "2020/06/30", distribuidor: 14.0 },
              //   { id: 966, fecha: "2020/06/30", distribuidor: 14.0 },
              //   { id: 965, fecha: "2020/06/30", distribuidor: 14.0 },
              //   { id: 964, fecha: "2020/06/30", distribuidor: 14.0 },
              //   { id: 963, fecha: "2020/06/30", distribuidor: 14.0 },
              // ]
              factura.reverse()
            }
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item, index }) => (
              <View
                style={[
                  {
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginVertical: 10,
                  },
                ]}
              >
                <View style={[{ alignItems: "center", flex: 1 }]}>
                  <Text style={[styles.label]}>{index + 1}</Text>
                </View>
                <View style={[{ alignItems: "center", flex: 1 }]}>
                  <Text style={[styles.label]}>{item.date}</Text>
                </View>
                <View style={[{ alignItems: "center", flex: 1 }]}>
                  <Text style={[styles.label]}>{item.time}</Text>
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
  label: {
    fontSize: RFPercentage(2.2),
  },
  number: {
    fontSize: RFPercentage(2.4),
  },
});
export default Facturacion;
