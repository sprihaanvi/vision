const reducer=(state,action)=>{
    switch(action.type){
        case "GET_INFO":
            return{
                ...state,                   //stores the inital state
                hits:action.payload.hits,
                isLoading:false,
                nbPages:action.payload.nbPages
            }
        case "SET_LOADER":
            return{
                ...state, 
                isLoading:true,
            }
        case "REMOVE_POST":
            return{
                ...state, 
                hits:state.hits.filter((currEle)=>currEle.objectID !== action.payload)
            }
        case "SEARCH_POST":
            return{
                ...state, 
                query:action.payload,
                searchTrigger: !state.searchTrigger
            };
    }
    return state;
}
export default reducer;