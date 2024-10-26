import React, {useEffect} from "react";
import { useDispatch, useSelector} from "react-redux";
import { fetchQuote} from "../../redux/actions";

const Quote = () => {
    const dispatch = useDispatch();
    const { quote, author, loading, error } = useSelector(state => state.quoteReducer);

     useEffect(() => {
        dispatch(fetchQuote())
     }, [dispatch]);

     const handleRefresh = () => {
         dispatch(fetchQuote());
     }

    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {!loading && !error && (
                <div>
                    <p>"{quote}"</p>
                    <p><i>- {author}</i></p>
                    <button onClick={handleRefresh}>Get Another Quote</button>
                </div>
            )}
        </div>
    )

}

export default Quote;