import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

import Container from "../../generales/Container";
import CustomButton from "../../components/CustomButton";
import BasicHeader from "../../components/Header/BasicHeader";
import { RFPercentage } from "react-native-responsive-fontsize";
import ChevronLeftIcon from "../../components/Icons/ChevronLeftIcon";

const CambiarContrasena = (props) => {
  return (
    <Container styleContainer={styles.screen} footer={false}>
      <BasicHeader
        title="Cambiar Contraseña"
        icon={<ChevronLeftIcon width={20} height={20} />}
      />
      <View style={styles.form}>
        <TextInput style={styles.input} placeholder="Contraseña actual" />
        <TextInput style={styles.input} placeholder="Contraseña nueva" />
        <TextInput style={styles.input} placeholder="Repita contraseña nueva" />
      </View>

      <View style={styles.buttonContainer}>
        <CustomButton>
          <Text style={styles.buttonLabel}>ACEPTAR</Text>
        </CustomButton>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    backgroundColor: "#fff",
  },

  form: {
    height: "50%",
    width: "70%",
    justifyContent: "center",
    minHeight: 350,
  },
  input: {
    width: "100%",
    borderBottomColor: "#000",
    borderBottomWidth: 1,
    marginVertical: 10,
    fontSize: RFPercentage(2.4),
    paddingVertical: 5,
  },
  buttonContainer: {
    width: 150,
    height: 40,
    marginTop: 20,
  },

  buttonLabel: {
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

export default CambiarContrasena;
