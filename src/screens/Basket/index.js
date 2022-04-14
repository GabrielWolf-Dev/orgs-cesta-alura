import { View, ScrollView } from 'react-native';

// Styles & Components:
import styles from './style';
import TopBasket from './components/TopBasket';
import Details from './components/Details';
import Items from './components/Items';

export default function Basket({ top, details, items }) {
    return(
        <ScrollView>
            <TopBasket {...top} />
            
            <View style={styles.containerContent}>
                <Details {...details} />
                <Items {...items} />
            </View>
        </ScrollView>
    );
}

// Anotações:
/*
    ScrollView - Habilita o Scroll, pois não é habilitado por default.
*/