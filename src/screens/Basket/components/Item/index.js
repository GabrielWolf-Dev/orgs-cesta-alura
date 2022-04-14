import { View, Image } from 'react-native';

// Styles & Components:
import styles from './style.js';
import TextFarm from "../../../../components/TextFarm";

export default function Item({ item: { name, image } }){
    return(
        <View style={styles.item}>
            <Image
                style={styles.img}
                source={image}
            />
            <TextFarm style={styles.name}>{name}</TextFarm>
        </View>
    );
}