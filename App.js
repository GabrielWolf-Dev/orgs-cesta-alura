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

/* Components */
import Basket from './src/components/Basket';

export default function App() {
  const [fontLoaded] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold
  });

  if(!fontLoaded) {
    return <View style={styles.containerErrorMsg}>
      <View style={styles.errorMsgBox}>
        <Text style={styles.errorMsgText}>Ouve algum erro ao carregar as fontes do App, por favor reinicie o App ou entre mais tarde :(</Text>
      </View>
    </View>
  }

  return (
    <SafeAreaView>
      <StatusBar />
      <Basket />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerErrorMsg: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  errorMsgBox: {
    borderRadius: 12,
    backgroundColor: '#eb4034',
    padding: 16
  },
  errorMsgText: {
    color: 'white',
    fontSize: 16,
    lineHeight: 26
  }
});

// Anotações:
/* 
  StatusBar = É a barra de status do celular no topo, onde vê a bateria, configurações, hora, etc.
  SafeAreaView = É uma forma de garantir que o conteúdo e os components não ficam sobrepostos no Status Bar.
*/