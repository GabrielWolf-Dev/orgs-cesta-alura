import { View, Image } from 'react-native';

// Styles & Components:
import styles from './style';
import TextFarm from '../../../../components/TextFarm';
import ButtonFarm from '../../../../components/ButtonFarm';

export default function Details({
    name,
    nameFarm,
    logo,
    description,
    price,
    buttonText
}){
    return(
        <>
            <TextFarm style={styles.name}>{name}</TextFarm>
            <View style={styles.containerTitleFarm}>
                <Image
                        style={styles.logoFarm}
                        source={logo}
                    />
                <TextFarm style={styles.nameFarm}>{nameFarm}</TextFarm>
            </View>
            <TextFarm style={styles.description}>{description}</TextFarm>
            <TextFarm style={styles.price}>{price}</TextFarm>

            <ButtonFarm>{buttonText}</ButtonFarm>
        </>
    );
}