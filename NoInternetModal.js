import { View, Text,Modal,Button,StyleSheet } from 'react-native'
import React from 'react'

const NoInternetModal = ({ show, isOffline,setOfflineStatus, isRetrying}) => {
const onRetry=(e)=>{
  setOfflineStatus(!isOffline);
}

  return(
    <Modal isVisible={show} style={styles.modal} animationInTiming={600}>
        <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Connection Error</Text>
            <Text style={styles.modalText}>
                Oops! Looks like your device is not connected to the Internet.
            </Text>
            <Button onPress={onRetry} disabled={isRetrying} style={styles.modelbutton}>
                Try Again sachin sigh hi hello  
            </Button>
        </View>
    </Modal>
  )
  };

const styles = StyleSheet.create({
    // ...
    modal: {
      justifyContent: 'flex-end',
      margin: 0,
    },
    modalContainer: {
      backgroundColor: '#fff',
      paddingHorizontal: 16,
      paddingTop: 20,
      paddingBottom: 40,
      alignItems: 'center',
    },
    modalTitle: {
      fontSize: 22,
      fontWeight: '600',
    },
    modalText: {
      fontSize: 18,
      color: '#555',
      marginTop: 14,
      textAlign: 'center',
      marginBottom: 10,
    },
    modelbutton: {
      color: 'red',
      paddingVertical: 12,
      paddingHorizontal: 16,
      width:'100%',
      alignItems: 'center',
      marginTop: 20,
    },
    buttonText: {
      color: '#fff',
      fontSize: 20,
    },
  });
export default NoInternetModal