import createDataContext from './createDataContext';
import symptomApi from '../api/symptoms';

const friendReducer = (state, action) => {
    switch (action.type) {
        case 'fetch_email':
            return action.payload;
        default:
            return state;
    }
};


const fetchemail = dispatch => async (email)=> {
   // console.log('i cam here')
    const response = await symptomApi.post('/email',{email});
    //console.log(response.data)
    dispatch({type: 'fetch_email', payload: response.data})
    console.log(response.data)

}



export const {Provider, Context} = createDataContext(
    friendReducer,
    {fetchemail},
    []
)