import { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';

import { loadHomeTop } from '../../../../services/loadDatas';
/* Components & Styles */
import styles from './style.js';

/* Assets */
import logo from '../../../../../assets/logo.png';

export default function TopHome() {
    const [dataTop, setDataTop] = useState({});

    useEffect(() => {
        setDataTop(loadHomeTop());
    }, []);
    
    return(
        <View style={styles.top}>
            <Image
                style={styles.image}
                source={logo}
            />
            <Text style={styles.welcomeText}>{dataTop.welcome}</Text>
            <Text style={styles.subtitle}>{dataTop.subtitle}</Text>
        </View>
    );
}