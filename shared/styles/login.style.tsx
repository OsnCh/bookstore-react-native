import { StyleSheet } from 'react-native';
import colors from '../constants/colors'

export default StyleSheet.create({
    formLogin:{
      width: '100%',
      flex: 3,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    loginButtonContent:{
      color: colors.white, 
      textAlign: 'center',
      marginTop: 'auto',
      marginBottom: 'auto'
    },
    elform: {
      width: '75%',
      maxWidth: '100%',
      marginLeft: '10%',
      marginRight: '10%',
      marginBottom: 20
    },
    socialButton:{
      width: '100%',
      maxHeight: 75,
      maxWidth: 300
    },
    socialButtons: {
      marginTop: 'auto',
    },
    registrationButtonText: {
      textAlign: 'center',
      color: colors.primary
    }
  });
  