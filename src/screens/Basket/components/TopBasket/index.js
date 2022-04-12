import { Image } from 'react-native';

// Styles & Components:
import styles from './styles';
import TextFarm from '../../../../components/TextFarm';

// Assets:
import top from '../../../../../assets/topo.png';

export default function TopBasket({ title }){
    return(
        <>
            <Image
                style={styles.top}
                source={top}
            />
            <TextFarm style={styles.title}>{title}</TextFarm>
        </>
    );
}