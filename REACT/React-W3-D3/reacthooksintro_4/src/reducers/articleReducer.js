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
        case "REMOVE_ARTICLE":
            return {
                ...state,
                data: state.data.filter(article => article.objectID !== action.payload)
            }
        default:
            throw new Error();
    }
    
}