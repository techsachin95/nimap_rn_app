import React from 'react'
import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import User from './User';
import NoInternetModal from './NoInternetModal';
import { StyleSheet, FlatList, SafeAreaView, Text } from 'react-native';
import NetInfo from "@react-native-community/netinfo";

const Users = () => {
    const [isLoading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);

    const [isOffline, setOfflineStatus] = useState(false);
    
    const fetchUsers = useCallback(() => {

        setLoading(true);
        axios.get('https://randomuser.me/api/?results=30')
            .then(({ data }) => {
                const { results } = data;
                setUsers(results);
                isOffline && setOfflineStatus(false);

            })
            .finally(() => { setLoading(false); });
    },[isOffline]);

    useEffect(() => {
        const removeNetInfoSubscription = NetInfo.addEventListener((state) => {
            const offline = !(state.isConnected && state.isInternetReachable);
            setOfflineStatus(offline);
            isOffline && setOfflineStatus(false)
        });
        fetchUsers();

        return () => removeNetInfoSubscription();

    }, []);



    return (
        <>
            <SafeAreaView style={styles.container}>
                {isLoading?<Text>...Loading</Text>:null}
                <FlatList
                    onRefresh={fetchUsers}
                    refreshing={isLoading}
                    data={users}
                    renderItem={({ item: user }) => (
                        <>
                         {isOffline ? (<NoInternetModal
                                show={isOffline}
                                isOffline={isOffline}
                                setOfflineStatus={setOfflineStatus}
                                isRetrying={isLoading}
                            />):(<User
                            
                                name={`${user.name.first} ${user.name.last}`}
                                email={user.email}
                                avatar={user.picture.thumbnail}
                            />)
                            }
                        </>
                    )}
                    keyExtractor={(user) => user.login.uuid}
                />
            </SafeAreaView>
        </>
    );
};
const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
    }
});
export default Users;