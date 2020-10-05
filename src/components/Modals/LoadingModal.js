import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  FlatList, ScrollView, TouchableOpacity, ActivityIndicator
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import Modal from 'react-native-modal';
import ElGasLogo from '../Icons/ElGasLogo'
import {colores} from '../../constantes/Temas'

const LoadingModal = ({modal={show:false, message:'Mensaje'}, setModal=()=>{}}) => {
    const {show, message} = modal 
    return(
        <Modal isVisible={show} style={{width:wp(80), height:hp(20), backgroundColor:'transparent', alignSelf:'center', marginVertical:hp(20)}}  backdropOpacity={0.5} >
            <ActivityIndicator size={hp(15)} />
        </Modal>
    )
}

export default LoadingModal