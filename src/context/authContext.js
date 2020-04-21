import {AsyncStorage} from'react-native'
//import AsyncStorage from '@react-native-community/async-storage';


import createDataContext from './createDataContext';
import symptomsAPI from '../api/symptoms';
import {navigate} from '../navigationRef';

const authReducer = (state, action)=> {
    switch (action.type){
        case 'add_error':
            return {...state, errorMessage: action.payload}
        case 'signin':
            return {errorMessage: '', token: action.payload}
        case 'clear_error_message':
            return {...state, errorMessage: ''}
        case 'signout':
            return {errorMessage: '', token: null}
        case 'storeemail':
            return {...state, email: action.payload}
        default: 
            return state;
    }
};


const clearErrorMessage = dispatch => () =>{
    dispatch({type: 'clear_error_message'})
}

const tryLocalSignIn = dispatch => async()=>{
    const token = await AsyncStorage.getItem('token');
    if(token){
       // console.log('I came here')
        dispatch({type:'signin', payload: token})
        navigate('AddFriends');
    }else{
        navigate('loginFlow');

    }
}


const signup = (dispatch)=> async ({email, password})=>{
try{
    const response = await symptomsAPI.post('/signup', {email, password});
    await AsyncStorage.setItem('token', response.data.token)
    dispatch({type: 'signin', payload: response.data.token})
    dispatch({type: 'storeemail', payload: email})

    navigate('register')

} catch(err){
    dispatch ({type: 'add_error', payload: 'Something went wrong with sign up'})
}

}


const signin = (dispatch)=> async ({email, password})=>{
    try{
        const response = await symptomsAPI.post('/signin', {email, password});
        await AsyncStorage.setItem('token', response.data.token)
        dispatch({type: 'signin', payload: response.data.token})
        navigate('AddFriends')
    
    } catch(err){
        dispatch ({type: 'add_error', payload: 'Something went wrong with sign in'})
    }


}

const signout = (dispatch)=> async()=>{
        
await AsyncStorage.removeItem('token');
dispatch({type: 'signout'})
navigate('loginFlow')
};


export const {Provider, Context} = createDataContext(
    authReducer,
    {signup,signin,signout,clearErrorMessage,tryLocalSignIn},
    {token: null, errorMessage: '', email: ''}
)