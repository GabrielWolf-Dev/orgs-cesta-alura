import { View, FlatList } from 'react-native';

// Styles & Components:
import styles from './style';
import TopBasket from './components/TopBasket';
import Details from './components/Details';
import Item from './components/Item';
import TextFarm from '../../components/TextFarm';

export default function Basket({ top, details, items }) {
    return(
        <>
            <FlatList
                data={items.list}
                renderItem={Item}
                keyExtractor={({ name, image }, index) => index}
                ListHeaderComponent={() => {
                    return(
                        <>
                            <TopBasket {...top} />
            
                            <View style={styles.containerContent}>
                                <Details {...details} />
                                <TextFarm style={styles.title}>{items.title}</TextFarm>
                            </View>
                        </>
                    );
                }}
            />
        </>
    );
}

// Anotações:
/*
    ScrollView - Habilita o Scroll, pois não é habilitado por default.
    FlatList - É uma forma mais performática do que utilizar o map do Vanilla JS, sendo essêncial para lstas grandes, diferente da ScrollView que é mais genérico com listas pequenas. Entretanto essas listas, como são virtualizadas pelo react, eles não podem estar dentro de um ScrollView, então o correto é utilizar a FlatList junto com o ListHeaderComponent e ListFooterComponent
    ListHeaderComponent -- Quando se utiliza uma FlatList, baseado nela, neste caso os elementos da ordem de renderização dentro desta função começa pelo topo do dispositivo, por isso do nome Header da função. Simplificando mais ainda, o Header é o que vem antes da lista e Footer o que vem depois.

    https://reactnative.dev/docs/using-a-scrollview
    https://reactnative.dev/docs/using-a-listview
*/