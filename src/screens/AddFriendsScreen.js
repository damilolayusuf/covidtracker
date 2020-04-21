import React, {useState, useEffect, useContext} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import Spacer from '../components/spacer';
import {Context as FriendContext} from '../context/FriendContext';
import {Context as FriendSymptomContext} from '../context/FriendSymptomContext';
import FriendsScreen from './FriendsScreen';
import GetFriendSymptom from '../components/GetFriendSymptoms';
import GetFriendSymptoms from '../components/GetFriendSymptoms';
//import useResults from '../hooks/useResults';
//import ResultsList from '../components/ResultsList';

const AddFriendsScreen = () => {
    const [term, setTerm] = useState('');
    const {state,fetchemail} = useContext(FriendContext);
    const [show, setShow] = useState(false);
    const [run, setRun] = useState(false);
    
  
console.log('show is ' + show)
       state[0]  ? console.log('email is ' + state[0]._id) : console.log('symp not there yet')

    //state[0]  ? console.log('symptoms is' + state1) : console.log('symp not there yet')

    //symp = GetFriendSymptom(state[0]._id,state)



    return <>
   
            <View style = {styles.container}>
                    <SearchBar 
                        term = {term} 
                        onTermChange = {(newTerm)=>{setTerm(newTerm)}}
                        onTermSubmit = {()=>{
                        
                        fetchemail(term)
                        {state[0] ? setShow(true) : setShow(false)}
                       
                     }}
                    />

                    {show ? <GetFriendSymptoms 
                                friendID = {state[0]._id}
                            />: null}


                   
                        
                
            </View>
    
       
    </>
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: 50
    }
});

export default AddFriendsScreen;