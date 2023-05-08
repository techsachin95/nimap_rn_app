import React from 'react'
import { View, Text,Image,Dimensions,StyleSheet } from 'react-native'

const User = ({name, email, avatar}) => {
  return (
    <View style={styles.user}>
    <Image source={{uri: avatar}} style={styles.avatar} />
    <View style={styles.info}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.email}>{email}</Text>
    </View>
  </View>
  );
};
const styles = StyleSheet.create({
    user: {
        width: Dimensions.get('screen').width - 32,
        alignSelf: 'center',
        marginVertical: 8,
        padding: 12,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 6,
        flexDirection: 'row',
        alignItems: 'center',
      },
      info: {
        marginLeft: 10,
      },
      avatar: {
        width: 60,
        height: 60,
        borderRadius: 100,
        color:'black'
      },
      name: {
        color: '#424242',
        fontSize: 16,
        fontWeight: '600',
      },
      email: {
        marginTop: 6,
        color: '#888',
      },
  });
export default User