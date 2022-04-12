import { StyleSheet, Dimensions } from 'react-native';

const widthScreenDevice = Dimensions.get('screen').width;
const widthImage = 768;
const heightImage = 568;

const styles = StyleSheet.create({
    top: {
        width: '100%',
        height: heightImage / widthImage * widthScreenDevice, // Altura exata da imagem
    },
    title: {
        width: '100%',
        position: 'absolute',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        lineHeight: 26,
        color: 'white',
        padding: 16
    }
});

export default styles;