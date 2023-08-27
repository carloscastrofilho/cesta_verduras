import React from "react";
import { Text, Image, StyleSheet, Dimensions, View } from "react-native";
import topo from '../../assets/topo.png';
import logo from '../../assets/logo.png'

const width = Dimensions.get('screen').width;

export default function Cesta(){
    return (
    <>   
      <Image source={topo} style={styles.topo}/> 
      <Text style={styles.titulo}> Detalhe da Cesta </Text>
      <View style={styles.cesta}>
        <Text style={styles.nome}>Cesta de Verduras</Text>
        <View style={styles.fazenda}>
            <Image source={logo} style={styles.imagefazenda} / >
            <Text style={styles.nomeFazenda}>Jenny Jack Farm</Text>
        </View>
        <Text style={styles.descricao}>Uma cesta com produtos selecionados cuidadosamente 
            da fazenda direto para sua cozinha</Text>
        <Text style={styles.preco}>R$ 40,00</Text>
      </View>
    </>
    )
}

// export default Cesta;

const styles = StyleSheet.create({
      topo:{
        width: "100%",
        height: 578 / 768 * width,
      },
      cesta:{
        paddingHorizontal: 8 ,
        paddingVertical: 16 ,
      },
      titulo:{
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 24,
        lineHeight:26,
        color: "white",
        fontWeight: "bold",
        padding: 24,
      },
      nome:{
        color:"#464646",
        fontSize: 26,
        lineHeight: 42,
        fontFamily:"MontserratBold"
      },
      
      descricao:{
        color:"#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
      },

      preco: {
        color:"#2A9f85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,

      },

      fazenda: {
        flexDirection: "row",
        paddingVertical: 16,
      },

      imagefazenda : {
        width: 32,
        height: 32,
      },

      nomeFazenda:{
        fontSize: 16,
        lineHeight: 42,
        fontWeight: "bold",
        paddingLeft: 16,
        fontFamily:"MontserratRegular"
      },
    });