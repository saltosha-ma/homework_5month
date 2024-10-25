const initialState = {
  facts: [],
  loading: false,
  error: null,
};

const factReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_FACTS_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_FACTS_SUCCESS':
      return { ...state, loading: false, facts: action.payload };
    case 'FETCH_FACTS_FAILURE':
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export default factReducer;
