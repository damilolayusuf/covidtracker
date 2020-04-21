import createDataContext from './createDataContext';
import symptomApi from '../api/symptoms';

const friendsymptomReducer = (state, action) => {
    switch (action.type) {
        case 'fetch_symptoms':
            return action.payload;
        default:
            return state;
    }
};



const fetchSymptoms = dispatch => async (id)=> {
   // console.log('i cam e ehre')
    const response = await symptomApi.post('/friendsymp',{id});
    dispatch({type: 'fetch_symptoms', payload: response.data})

}


export const {Provider, Context} = createDataContext(
    friendsymptomReducer,
    {fetchSymptoms},
    []
)