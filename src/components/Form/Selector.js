import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { colores } from "../../constantes/Temas";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const CustomSelector = ({
  fields = ["Valor1", "Valor2"],
  form,
  radiusWidth,
  radiusHeight,
}) => {
  const Item = ({ title }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          form.setForm("dniType", title);
        }}
        style={{
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            form.setForm("dniType", title);
          }}
          style={{
            width: radiusWidth,
            height: radiusHeight,
            backgroundColor:
              form.fields.dniType === title ? colores.bgOscuro : "transparent",
            borderRadius: radiusWidth / 2,
            alignSelf: "center",
            borderColor: "#000",
            borderWidth: 0.8,
          }}
        />
        <Text
          style={{
            fontSize: RFPercentage(2),
            textAlignVertical: "center",
            marginLeft: wp(1),
          }}
        >
          {title}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View
      style={{
        flex: 1,
        marginTop: 5,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {fields.map((value, index) => {
          return <Item key={index} title={value} />;
        })}
      </View>
    </View>
  );
};

export default CustomSelector;
