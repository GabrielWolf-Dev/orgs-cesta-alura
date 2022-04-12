import {
  StatusBar,
  SafeAreaView,
  StyleSheet,
  View,
  Text
} from 'react-native';
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold
} from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';

/* Components */
import Basket from './src/screens/Basket';
import mock from './src/mocks/basket';

export default function App() {
  const [fontLoaded] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold
  });

  if(!fontLoaded) {
    return <AppLoading/>;
  }
  // <Basket {...mock} /> == <Basket top={mock.top} details={mock.details} />
  return (
    <SafeAreaView>
      <StatusBar />
      <Basket {...mock} />
    </SafeAreaView>
  );
}

// Anotações:
/* 
  StatusBar = É a barra de status do celular no topo, onde vê a bateria, configurações, hora, etc.
  SafeAreaView = É uma forma de garantir que o conteúdo e os components não ficam sobrepostos no Status Bar(Correção específica para iOS).
*/