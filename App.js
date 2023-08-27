//import { StatusBar } from 'expo-status-bar';
import { StatusBar , SafeAreaView, View } from 'react-native';
import { useFonts, 
        Montserrat_400Regular,
        Montserrat_700Bold} from '@expo-google-fonts/montserrat';
import Cesta from './src/telas/Cesta';

export default function App() {
  const [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });

  if ( !fonteCarregada) {
    return <View />
  }
  return (
    <SafeAreaView>
      <StatusBar />
      <Cesta />
    </SafeAreaView>
  );
}

{/* <Text style={styles.Text}>ola mundo!</Text>
      <Text>Carlos Filho</Text> */}
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   Text:{
//     color:"red",
    
//   }
// });
