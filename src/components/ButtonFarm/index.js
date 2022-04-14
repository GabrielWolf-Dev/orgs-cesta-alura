import { TouchableOpacity } from "react-native";

// Styles & Components:
import styles from './style';
import TextFarm from "../TextFarm";

export default function ButtonFarm({ children, style }){
    return(
        <TouchableOpacity style={[styles.button, style]}>
            <TextFarm style={styles.buttonText}>{children}</TextFarm>
        </TouchableOpacity>
    );
}

// Anotações:
/*
    O componente padrão Button tem estilos padronizados para cada dispositivo Ios e Android e não podemos modificar muito o estilo, então o certo é utilizar algum componente Touchable, ou seja, tocável, no caso é um touch que diminui a opacidade e podemos estilizar do nosso jeito.
*/