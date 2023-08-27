import React from "react";
import { StyleSheet, View } from "react-native";

import Topo from "./compomentes/Topo";
import Detalhes from "./compomentes/Detalhes";

export default function Cesta({topo,detalhes}){
    return (
    <>   
      <Topo {...topo} />
      <View style={styles.cesta}>
          <Detalhes {...detalhes} />
      </View>
    </>
    )
}

// export default Cesta;
const styles = StyleSheet.create({
  cesta:{
    paddingHorizontal: 8 ,
    paddingVertical: 16 ,
  },
      
});