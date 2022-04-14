import { Text } from 'react-native';

// Styles & Components:
import styles from './style';

export default function TextFarm({ children, style }) {
    let styleText = styles.text;

    if(style?.fontWeight === 'bold'){
        styleText = styles.textBold;
    }

    return <Text style={[style, styleText]}>{ children }</Text>
}

// Anotações:
/* 
    style? = Verifica se a prop "style" existe no componente, se não existir não vai mandar um erro, no caso nosso é ótimo pois tem textos que não precisam de estilos, somente a fonte.
*/