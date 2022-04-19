import { View, Text, Image } from 'react-native';

/* Components & Styles */
import styles from './style.js';

/* Assets */
import logo from '../../../../../assets/logo.png';

export default function TopHome() {
    return(
        <View style={styles.top}>
            <Image
                style={styles.image}
                source={logo}
            />
            <Text style={styles.welcomeText}>Olá Gabriel</Text>
            <Text style={styles.subtitle}>Encontre os melhores produtores</Text>
        </View>
    );
}