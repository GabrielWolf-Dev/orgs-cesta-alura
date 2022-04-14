import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ECECEC',
        paddingVertical: 16,
        marginHorizontal: 16,
        alignItems: 'center'
    },
    img: {
        width: 46,
        height: 46
    },
    name: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
        color: '#464646'
    }
});

export default styles;