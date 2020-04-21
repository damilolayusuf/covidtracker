import React, {useState, useEffect, useContext} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import Spacer from '../components/spacer';
import {Context as FriendSymptomContext} from '../context/FriendSymptomContext';



const GetFriendSymptoms = ({friendID})=> {
    const {state,fetchSymptoms} = useContext(FriendSymptomContext);
        console.log(friendID)

        
            fetchSymptoms({friendID})
        
   
        

        return <>
            <Text>{state[0] ? state[0].status:'Run a search'}</Text>
        </>
   // },[{friendID}]);

};

export default GetFriendSymptoms;

