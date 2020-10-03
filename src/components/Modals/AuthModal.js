import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import Modal from 'react-native-modal';
import ElGasLogo from '../Icons/ElGasLogo'
import {colores} from '../../constantes/Temas'

const AuthModal = ({modal={show:false, message:'Mensaje'}, setModal=()=>{}}) => {
    const {show, message} = modal
    return(
        <Modal isVisible={show} style={{width:wp(80), height:hp(20), backgroundColor:'#fff', alignSelf:'center', marginVertical:hp(20)}}  backdropOpacity={0.5} >
            <View style={{alignSelf:'center', flex:2.5, marginTop:hp(5)}} >
                <ElGasLogo width={wp(70)} height={hp(25)} />
            </View>
            <View style={{flex:2, marginTop:hp(2), marginHorizontal:wp(5)}} >
                <Text style={{textAlignVertical:'center', textAlign:'center', fontSize:RFPercentage(3)}} >
                    {message}
                </Text>
            </View>
            <View style={{flex:1, justifyContent:'center'}} >
                <TouchableOpacity onPress={()=>{setModal({...modal, show:false})}} style={{width:wp(70), height:hp(6), borderRadius:wp(10),backgroundColor:colores.amarillo, alignSelf:'center', justifyContent:'center'}} >
                    <Text style={{textAlign:'center', fontSize:RFPercentage(2.5)}} >Aceptar</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    )
}

export default AuthModal