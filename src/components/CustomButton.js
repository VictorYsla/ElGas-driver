import React from "react";
import { StyleSheet, View } from "react-native";
import { TouchableNativeFeedback } from "react-native-gesture-handler";

const CustomButton = ({ onPress=()=>{}, children, btnColor='#F2F2F2' }) => (
  <View style={styles.buttonWrapper}>
    <TouchableNativeFeedback onPress={() => onPress()}>
      <View style={{...styles.button, backgroundColor: btnColor}}>{children}</View>
    </TouchableNativeFeedback>
  </View>
);

const styles = StyleSheet.create({
  buttonWrapper: { overflow: "hidden", borderRadius: 10 },
  button: {
    padding: 20,
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
});

export default CustomButton;
