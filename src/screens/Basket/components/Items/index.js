import { View, Image } from 'react-native';

// Styles & Components:
import styles from './style.js';
import TextFarm from "../../../../components/TextFarm";

export default function Items({
    title,
    list
}){
    return(
        <>
            <TextFarm style={styles.title}>{title}</TextFarm>
            {list.map(({ name, image }, index) => (
                <View key={index} style={styles.item}>
                    <Image
                        style={styles.img}
                        source={image}
                    />
                    <TextFarm style={styles.name}>{name}</TextFarm>
                </View>
            ))}
        </>
    );
}