import { StyleSheet } from 'react-native';
import colors from '../constants/colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.body,
    },
    inputs: {
        borderColor: colors.primary,
        borderWidth: 1,
        paddingRight: 20,
        paddingLeft: 20
    },
    errorInputs:{
        color: colors.error,
        textAlign: 'left',
        textAlignVertical: 'top',
        padding: 0,
        width: '100%'
    }
})