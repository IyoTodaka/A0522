export const articleReducer = (state, action) => {

    switch(action.type){
        case "ARTICLES_FETCH_INIT":
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        case "ARTICLES_FETCH_SUCCESS":
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload
            }
        case "ARTICLES_FETCH_FAILURE":
            return {
                ...state,
                isError: true,
                isLoading: false
            }
        default:
            throw new Error();
    }
    
}