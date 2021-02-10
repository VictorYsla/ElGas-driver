import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

export const firebaseConfig = {
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

export const firebaseApp = firebase.initializeApp(firebaseConfig);

import { decode, encode } from "base-64";

if (!global.btoa) {
  global.btoa = encode;
}

if (!global.atob) {
  global.atob = decode;
}

const firestore = firebase.firestore(firebaseApp);

export const getAllUsers = async (funcion = () => {}) => {
  try {
    const Db = firestore.collection("gestion");

    Db.onSnapshot(
      {
        includeMetadataChanges: true,
      },
      function (docs) {
        var users = [];
        docs.forEach(function (doc) {
          users.push({
            ...doc.data(),
            id: doc.id,
            //doc: doc
          });
        });
        //console.log('firestore', users);
        funcion(users);
      }
    );
  } catch (err) {
    console.log("error", err);
  }
};

export const saveUser = async (user = {}) => {
  try {
    let mydoc = firestore.collection("gestion").doc();
    mydoc.set({
      created_at: new Date().getTime(),
      ...user,
    });
  } catch (err) {
    console.log("error", err);
  }
};

export const updateUser = async (user = {}, operacion = true) => {
  try {
    let mydoc = firestore.collection("gestion").doc(user.id);
    if (operacion) {
      mydoc.update({
        estado_empresas: 1,
      });
    } else {
      mydoc.update({
        estado_empresas: 2,
      });
    }
  } catch (err) {
    console.log("error", err);
  }
};
