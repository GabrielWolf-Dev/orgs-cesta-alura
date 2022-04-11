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
    },
    containerContent: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    name: {
        color: '#464646',
        fontSize: 26,
        lineHeight: 42,
        fontFamily: 'MontserratBold'
    },
    containerTitleFarm: {
        flexDirection: 'row',
        paddingVertical: 12
    },
    logoFarm: {
        width: 32,
        height: 32,
        marginRight: 12,
    },
    nameFarm: {
        color: 'black',
        fontSize: 16,
        lineHeight: 26,
        fontFamily: 'MontserratRegular'
    },
    description: {
        color: '#A3A3A3',
        fontSize: 16,
        lineHeight: 26
    },
    price: {
        color: '#2A9F85',
        fontWeight: 'bold',
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    }
});

export default styles;

// Anotações:
/*
    Dimensions = Nós provê várias funcionalidades para medir as dimensões do aparelho que vai utilizar o app.
*/