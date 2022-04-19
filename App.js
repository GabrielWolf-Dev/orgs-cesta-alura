import {
  StatusBar,
  SafeAreaView,
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
import Home from './src/screens/Home';

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
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      {/* <Basket {...mock} />*/}
      <Home />
    </SafeAreaView>
  );
}

// Anotações:
/* 
  StatusBar = É a barra de status do celular no topo, onde vê a bateria, configurações, hora, etc.
  SafeAreaView = É uma forma de garantir que o conteúdo e os components não ficam sobrepostos no Status Bar(Correção específica para iOS).
  SafeAreaView style={{ flex: 1 }} = É para garantir que o tamanho do flex seja sempre a da área inteira, prevenindo que a tela passa para baixo por causa do FlatList, além de fazer com que os dados do FlatList só renderize os elementos que estão visívei na tela, conforme se scrolla vai renderizando os outros.
*/