import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    name: {
        color: '#464646',
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold'
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
        lineHeight: 26
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
    },
    button: {
        marginTop: 16,
        backgroundColor: '#2A9F85',
        paddingVertical: 16,
        borderRadius: 6,
    },
    buttonText: {
        textAlign: 'center',
        color: '#ffffff',
        fontSize: 16,
        lineHeight: 26,
        fontWeight: 'bold'
    }
});

export default styles;