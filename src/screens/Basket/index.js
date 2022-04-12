import { View } from 'react-native';

// Styles & Components:
import styles from './styles';
import TopBasket from './components/TopBasket';
import Details from './components/Details';

export default function Basket({ top, details }) {
    return(
        <>
            <TopBasket {...top} />
            
            <View style={styles.containerContent}>
                <Details {...details} />
            </View>
        </>
    );
}