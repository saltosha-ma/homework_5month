import axios from 'axios';

export const fetchFacts = () => {
  return async (dispatch) => {
    dispatch({ type: 'FETCH_FACTS_REQUEST' });
    try {
      const response = await axios.get('https://api.chucknorris.io/jokes/random');
      dispatch({ type: 'FETCH_FACTS_SUCCESS', payload: response.data.value });
    } catch (error) {
      dispatch({ type: 'FETCH_FACTS_FAILURE', error: error.message });
    }
  };
};
