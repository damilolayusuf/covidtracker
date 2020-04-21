import React, {useContext, useState} from 'react';
import { View, StyleSheet, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import Spacer from '../components/spacer';
import { Button, Input, Text } from 'react-native-elements';
import {FontAwesome} from '@expo/vector-icons';
import {Context as AuthContext} from '../context/authContext';
import {Context as SympContext} from '../context/SymptomContext';
import List from '../components/List';
import {navigate} from '../navigationRef';





const RegisterScreen = ({navigation}) => {
    const {state} = useContext(AuthContext);
    const [city, setCity] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [status, setStatus] = useState(0);
    const [cough, setCough] = useState(0);
    const [breath, setBreath] = useState(0);
    const [fever, setFever] = useState(0);
    const [none, setNone] = useState(0);
    const symp = {
        cough,breath,fever,none
    };
    const info = {
        name,city,age
    }
    
    const { fetchSymptoms,createSymptoms} = useContext(SympContext);

   


    return <>
    <SafeAreaView>
        
        <Spacer>
            <Text h3>Enter Your Information</Text>
        </Spacer>
        <Input
            label = 'Name'
            placeholder='Enter Name'
            value = {name} 
            onChangeText={(newName)=> setName(newName)}
            rightIcon={{ type: 'font-awesome', name: 'chevron-right' }}/>
        <Input
            label = 'Email'
            disabled={true}
            value={state.email}
            rightIcon={{ type: 'font-awesome', name: 'chevron-right' }}/>
        <Input
            label = 'City'
            placeholder='Enter City'
            value = {city} 
            onChangeText={(newCity)=> setCity(newCity)}
            rightIcon={{ type: 'font-awesome', name: 'chevron-right' }}/>
        <Input
            label = 'Age'
            placeholder='Enter Age'
            value = {age} 
            onChangeText={(newAge)=> setAge(newAge)}
            rightIcon={{ type: 'font-awesome', name: 'chevron-right' }}/>
        <Spacer>
            <View style={styles.container}>
                <Text style={styles.Text}>COVID-19 Status:</Text>
                 
                <TouchableOpacity  style={status === 1 ? styles.selected:styles.deselected} onPress={()=>setStatus(1)} >
                    <FontAwesome name="plus" size={30} />
                </TouchableOpacity>
                <TouchableOpacity  style={status === 0 ? styles.selected:styles.deselected} onPress={()=>setStatus(0)}>
                    <FontAwesome name="minus" size={30} />
                </TouchableOpacity>
            </View>
        </Spacer>
            <View style={styles.container2}>
                <View style = {{borderBottomWidth:1}}>
                <Text style={styles.Text2}>Symptoms</Text>
                </View>
                <List optionText = "Dry Cough">
                    <TouchableOpacity  style={cough === 1 ? styles.optionsSelected:styles.optionsDeselected} onPress={()=>setCough(1)} >
                        <FontAwesome name="check" size={20} />
                    </TouchableOpacity>
                    <TouchableOpacity  style={cough === 0 ? styles.optionsSelected:styles.optionsDeselected} onPress={()=>setCough(0)}>
                            <FontAwesome name="remove" size={20} />
                    </TouchableOpacity>
                </List>

                <List optionText = "Shortness of Breath">
                    <TouchableOpacity  style={breath === 1 ? styles.optionsSelected:styles.optionsDeselected} onPress={()=>setBreath(1)} >
                        <FontAwesome name="check" size={20} />
                    </TouchableOpacity>
                    <TouchableOpacity  style={breath === 0 ? styles.optionsSelected:styles.optionsDeselected} onPress={()=>setBreath(0)}>
                            <FontAwesome name="remove" size={20} />
                    </TouchableOpacity>
                </List>
                <List optionText = "Fever">
                    <TouchableOpacity  style={fever === 1 ? styles.optionsSelected:styles.optionsDeselected} onPress={()=>setFever(1)} >
                        <FontAwesome name="check" size={20} />
                    </TouchableOpacity>
                    <TouchableOpacity  style={fever === 0 ? styles.optionsSelected:styles.optionsDeselected} onPress={()=>setFever(0)}>
                            <FontAwesome name="remove" size={20} />
                    </TouchableOpacity>
                </List>
                <List optionText = "None">
                    <TouchableOpacity  style={none === 1 ? styles.optionsSelected:styles.optionsDeselected} onPress={()=>setNone(1)} >
                        <FontAwesome name="check" size={20} />
                    </TouchableOpacity>
                    <TouchableOpacity  style={none === 0 ? styles.optionsSelected:styles.optionsDeselected} onPress={()=>setNone(0)}>
                            <FontAwesome name="remove" size={20} />
                    </TouchableOpacity>
                </List> 
            </View>
        
       
        
        <Spacer>
            <Button title = "Register" onPress={async()=>{
                        await createSymptoms(status,info,symp);
                        console.log('This is info:' + info);
                        navigation.navigate('Friends')
                    }}/>
        </Spacer>   

        
        


        
    </SafeAreaView>   
    </>;
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "flex-start",
        paddingHorizontal: 1
      },
      container2:{
        //
        alignSelf: "stretch",
        borderWidth: 1
      },
      Text:{
          fontSize: 20,
          
      },
      Text2:{
          fontSize:30, 
          fontWeight: "bold",
          borderBottomWidth: 3,
          alignSelf: "center" 
      },
      Text3:{
        fontSize:16, 
        margin: 10
    },
    selected: {
        alignItems: "center",
        backgroundColor: "#008000",
        paddingHorizontal: 20,
        borderWidth: 1,
        marginLeft: 5
        
      },
      deselected: {
        alignItems: "center",
        backgroundColor: "#F2DCDC",
        paddingHorizontal: 20,
        borderWidth: 1,
        marginLeft: 5
        
      },
      optionsSelected:{
        backgroundColor: "#008000",
        paddingHorizontal: 20,
        borderWidth: 1,
        marginLeft: 5
      },
      optionsDeselected:{
       
        backgroundColor: "#F7F7F7",
        paddingHorizontal: 20,
        borderWidth: 1,
        marginLeft: 5
      },
      
});

export default RegisterScreen;