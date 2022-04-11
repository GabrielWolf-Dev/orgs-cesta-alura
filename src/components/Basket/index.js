import {
    Image,
    Text,
    View
} from 'react-native';

// Styles:
import styles from './styles';

// Assets:
import top from '../../../assets/topo.png';
import logo from '../../../assets/logo.png';

export default function Basket() {
    return(
        <>
            <Image
                style={styles.top}
                source={top}
            />
            <Text style={styles.title}>Detalhes da cesta</Text>

            <View style={styles.containerContent}>
                <Text style={styles.name}>Cesta de Verduras</Text>
                <View style={styles.containerTitleFarm}>
                    <Image
                        style={styles.logoFarm}
                        source={logo}
                    />
                    <Text style={styles.nameFarm}>Jenny Jack Farm</Text>
                </View>
                <Text style={styles.description}>Uma cesta com produtos selecionados cuidadozamente da fazenda direto para sua cozinha</Text>
                <Text style={styles.price}>R$ 40,00</Text>
            </View>
        </>
    );
}