import React, {useEffect, useContext} from 'react';
import {Context as AuthContext} from '../context/authContext';

const LoadingScreen = ()=>{

    const {tryLocalSignIn} = useContext(AuthContext);
    
    useEffect(()=> {
       // console.log('I came here')
        tryLocalSignIn();
    }, [])


    return null
};

export default LoadingScreen