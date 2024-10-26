import {types} from "./types";


export function asyncFunctionAction() {
    return function () {
        setTimeout(() => {
            alert('Hello World!')
        }, 2000)
    }
}

function getUsersAction(users) {
    return {
        type: types.USERS,
        payload: users
    }
}

export function fetchUsersAction() {
    return async function (dispatch) {

        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json()
        dispatch(getUsersAction(data))
    }
}

// export function fetchQuote() {
//     return async function (dispatch) {
//         dispatch({ type: 'FETCH_QUOTE_REQUEST' });
//
//         try {
//             const response = await fetch('https://api.quotable.io/random');
//             const data = await response.json()
//
//             dispatch({
//                 type: 'FETCH_QUOTE_SUCCESS',
//                 payload: {
//                     quote: data.content,
//                     author: data.author,
//                 }
//             })
//         }catch (error) {
//             dispatch({
//                 type: 'FETCH_QUOTE_FAILURE',
//                 payload: 'Failed to fetch quote',
//             })
//         }
//     }
// }



