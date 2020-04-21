import React, { useState} from 'react';
import { View, StyleSheet} from 'react-native';
import {  Text } from 'react-native-elements';


const List = ({optionText, children})=>{

    const [state, setState] = useState(0);
    return <>
        <View style = {{flexDirection: "row"}}>
                    <Text style={styles.Text}>{optionText}</Text>
                    <View style = {{flexDirection:"row", alignSelf:"center", flex:1, justifyContent:"flex-end"}}>
                        {children}
                    </View>
                    
                </View>
    </>

}


const styles = StyleSheet.create ({
    
      Text:{
        fontSize:16, 
        margin: 10
        //fontWeight: "bold",
       // borderWidth: 1,
        //paddingHorizontal: 120
    },
    
});

export default List;