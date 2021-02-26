import firebase from "firebase";
import moment from "moment";

export const updateCollection = async (
  collectionName = "1",
  doc = "1",
  body = { name: "" }
) => {
  return await firebase
    .firestore()
    .collection(collectionName)
    .doc(doc)
    .set(body)
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });
};

export const getCollection = async (collectionName = "1") => {
  return await firebase
    .firestore()
    .collection(collectionName)
    .get()
    .then((x) => {
      const values = [];
      x.docs.forEach((doc) => {
        values.push({ ...doc.data(), id_info: doc.id });
      });
      return values;
    });
  // .onSnapshot(response =>{
  //     const values=[]
  //     response.forEach((doc)=>{
  //         values.push(doc.data())
  //     })
  //     setResponse(values)
  // })
};

export const postCollection = (collectionName = "1", body = { name: "" }) => {
  firebase.firestore().collection(collectionName).add(body);
};

export const singUp = async (
  email = "",
  userName = "",
  password = "",
  phoneNumberUser = ""
) => {
  //console.log(email, userName, password, phoneNumberUser);
  return await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(async (res) => {
      return await res.user
        .updateProfile({ displayName: userName })
        .then((x) => {
          const user = {
            userName: res.user.displayName,
            token: res.user.l,
            uid: res.user.uid,
            email: res.user.email,
            emailVerified: res.user.emailVerified,
          };
          console.log("user", user);
          return { type: "sucess", value: user };
        });
    })
    .catch((e) => {
      console.log("error: ", e);
      return { type: "error", value: e };
    });
};

export const logIn = async (email = "", password = "") => {
  return await firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((res) => {
      // console.log('Login: ',res)
      const user = {
        userName: res.user.displayName,
        token: res.user.l,
        uid: res.user.uid,
        email: res.user.email,
        emailVerified: res.user.emailVerified,
      };
      return { type: "sucess", value: user };
      // console.log('obj', user );
      // setResponse({type:'sucess', value: user})
    })
    .catch((e) => {
      console.log("error: ", e);
      return { type: "error", value: e };
    });
};

export const getCurrentDeliverys = async (
  uid = "333333333333",
  type = status
) => {
  const collection = "plant_pedidos_en_camino";
  if (type !== "") {
    // console.log("InSolocitado");
    return await firebase
      .firestore()
      .collection(collection)
      .where("orderStatus", "==", `${type}`)
      .get()
      .then((x) => {
        const values = [];
        x.docs.forEach((doc) => {
          values.push({ ...doc.data(), id_doc: doc.id });
        });
        return values;
      });
  }
  return await firebase
    .firestore()
    .collection(collection)
    .where("id_driver", "==", `${uid}`)
    .where("orderStatus", "==", `${type}`)
    .get()
    .then((x) => {
      const values = [];
      x.docs.forEach((doc) => {
        values.push({ ...doc.data(), id_doc: doc.id });
      });
      return values;
    });
};

export const getDeliverys = async () => {
  const collection = "plant_pedidos_en_camino";
  return await firebase
    .firestore()
    .collection(collection)
    .get()
    .then((x) => {
      const values = [];
      x.docs.forEach((doc) => {
        values.push({ ...doc.data(), id_doc: doc.id });
      });
      return values;
    });
};

export const updateAceptedDelivery = async (user, docId, status) => {
  const collection = "plant_pedidos_en_camino";
  const { uid, userName } = user;
  // console.log(uid, userName, docId);
  try {
    await firebase
      .firestore()
      .collection(collection)
      .doc(docId)
      .update({
        orderStatus: status,
        id_driver: uid,
        nombre_driver: userName,
        docId: docId,
        date_miliseconds: moment(Date.now()).valueOf(),
      });
    return true;
  } catch (error) {
    console.log("error:", error);
    return false;
  }
};

export const getCollectionFacturacion = async (collection, type, date, id) => {
  console.log("type:", type, "date:", date, "id:", id);
  return await firebase
    .firestore()
    .collection(collection)
    .where("orderStatus", "==", `${type}`)
    .where("date_miliseconds", ">=", date)
    .where("id_driver", "==", `${id}`)
    .get()
    .then((x) => {
      const values = [];
      x.docs.forEach((doc) => {
        values.push({ ...doc.data() });
      });
      return values;
    });
};
