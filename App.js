import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import * as Font from "expo-font";
import Constants from "expo-constants";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist"; //NO BORRAR
import firebase from "firebase";

import { store, persistor } from "./src/redux/store";
import Cargando from "./src/generales/Cargando";
import Navigate from "./src/Navigate";
import { colores } from "./src/constantes/Temas";

const firebaseConfig = {
  // apiKey: "AIzaSyBk5ZiEvknFcEYFohScW2l_UER61mXwOIs",
  // authDomain: "camp-ebd9b.firebaseapp.com",
  // databaseURL: "https://elgas-68c82.firebaseio.com",
  // projectId: "elgas-68c82",
  // storageBucket: "elgas-68c82.appspot.com",
  // messagingSenderId: "564053304656",
  // appId: "1:564053304656:android:6aeaf58d5780d7c9cb3855",

  apiKey: "AIzaSyAjRTYs1Vvv-mlx0vDJOMInpc7prDGJdy8",
  authDomain: "elgas-af2c1.firebaseapp.com",
  projectId: "elgas-af2c1",
  storageBucket: "elgas-af2c1.appspot.com",
  messagingSenderId: "159071361770",
  appId: "1:159071361770:web:89292113132b79729f9593",
};

firebase.initializeApp(firebaseConfig);

export default function App() {
  const [load, setload] = useState(true);

  const renderLoading = () => (
    <View style={styles.container}>
      <Cargando />
    </View>
  );

  const fonts = async () => {
    setload(true);
    await Font.loadAsync({
      RobotoBold: require("./assets/fonts/Roboto-BoldCondensed.ttf"),
      RobotoRegular: require("./assets/fonts/Roboto-Condensed.ttf"),
      RobotoItalic: require("./assets/fonts/Roboto-CondensedItalic.ttf"),
    });
    setload(false);
  };

  useEffect(() => {
    //limpiar
    //persistStore(store).purge();

    fonts();
  }, []);

  return (
    !load && (
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={renderLoading()}>
          <Navigate />
          <StatusBar style="light" backgroundColor={colores.bgOscuro} />
        </PersistGate>
      </Provider>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingTop: Platform.OS == "ios" ? 0 : Constants.statusBarHeight,
  },
});
