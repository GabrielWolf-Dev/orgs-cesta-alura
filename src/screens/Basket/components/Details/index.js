import { View, Image, TouchableOpacity } from 'react-native';

// Styles & Components:
import styles from './styles';
import TextFarm from '../../../../components/TextFarm';

export default function Details({
    name,
    nameFarm,
    logo,
    description,
    price,
    button
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

            <TouchableOpacity style={styles.button}>
                <TextFarm style={styles.buttonText}>{button}</TextFarm>
            </TouchableOpacity>
        </>
    );
}

/*
    O componente padrão Button tem estilos padronizados para cada dispositivo Ios e Android e não podemos modificar muito o estilo, então o certo é utilizar algum componente Touchable, ou seja, tocável, no caso é um touch que diminui a opacidade e podemos estilizar do nosso jeito.
*/