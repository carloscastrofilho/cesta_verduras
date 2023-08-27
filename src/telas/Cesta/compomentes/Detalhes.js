import React from "react";
import Texto from "../../../compomentes/Texto";
import { Image, View,StyleSheet } from "react-native";

export default function Detalhes({nome, nomeFazenda, logoFazenda, descricao,preco}){
    return <>
    <Texto style={styles.nome}>{nome}</Texto>
        <View style={styles.fazenda}>
            <Image source={logoFazenda} style={styles.imagefazenda} / >
            <Texto style={styles.nomeFazenda}>{nomeFazenda}</Texto>
        </View>
        <Texto style={styles.descricao}>{descricao}</Texto>
        <Texto style={styles.preco}>{preco}</Texto>
    </>
}

const styles = StyleSheet.create({
      nome:{
        color:"#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
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
      },
    });