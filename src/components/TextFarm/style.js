import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    text: {
        fontFamily: "MontserratRegular",
        fontWeight: 'normal', // Garantir que seja normal, caso insira 600 que já é bold e não entra na condição.
    },
    textBold: {
        fontFamily: "MontserratBold",
        fontWeight: 'normal', // De acordo com a nossa lógica, se colocado como "bold", insere esse tipo de fonte, mas é precisa tirar o weight como "bold" pois entra em conflito com a font family que já é bold.
    }
});

export default styles;