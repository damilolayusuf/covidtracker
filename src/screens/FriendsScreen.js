import React, {useState, useEffect, useContext} from 'react';
import { View, StyleSheet, Text} from 'react-native';
import {NavigationEvents} from 'react-navigation';
import {Context as SympContext} from '../context/SymptomContext';
import {SafeAreaView} from 'react-navigation';
import { Divider, Card } from 'react-native-elements';

const FriendsScreen = () => {

    const { state, fetchSymptoms} = useContext(SympContext);
    //console.log(state)
    const test = state.length>0?state:[];
    return <>
           <NavigationEvents onWillFocus={fetchSymptoms} />
           
            <View style = {styles.container}> 
            
               
                <Card title="User Info">
                    {
                        test.map((u, i) => {
                            return (
                                <View key={i} >
                                <Text>Name: {u.info.name}</Text>
                                <Text>Age: {u.info.age}</Text>
                                <Text>City: {u.info.city}</Text>
                                <Text>Status: {u.status === 1 ? 'Positive':'Negative'}</Text>
                                </View>
                            );
                            })
                    }
                </Card>
            
            </View>
       
        
    </>
};



const styles = StyleSheet.create({
    container:{
        borderWidth:2,
        borderColor:'red',
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 3
    }
});



export default FriendsScreen;