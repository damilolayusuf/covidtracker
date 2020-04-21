import createDataContext from './createDataContext';
import symptomApi from '../api/symptoms';

const symptomReducer = (state, action) => {
    switch (action.type) {
        case 'fetch_symptoms':
            return action.payload;
        default:
            return state;
    }
};

const fetchSymptoms = dispatch => async ()=> {
    const response = await symptomApi.get('/symptoms');
    dispatch({type: 'fetch_symptoms', payload: response.data})
}




const createSymptoms = dispatch => async (status, info, symptoms)=> {
await symptomApi.post('/symptoms', {status, info,symptoms});

    

};

export const {Provider, Context} = createDataContext(
    symptomReducer,
    {fetchSymptoms,createSymptoms},
    []
)