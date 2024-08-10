//context ka kaam is kaunsa operation perform karna hai wo btana hai dispatch ko,dispatch reducer me jaakr jo bhi action rhega usko trigger krega
import React,{useContext,useReducer,useEffect} from "react";
import reducer from "../../reducer";

let API="https://hn.algolia.com/api/v1/search?";

const initialState={
    isLoading:true,
    query:"health",
    nbPages:0,
    pages:0,
    hits:[],
    searchTrigger: false
}
//context creation
const AppContext=React.createContext();

//provide : children is complete react app, provider has got hold of it.

const AppProvider=({children})=>{

  const [state,dispatch]=useReducer(reducer,initialState);
    
  
  const fetchApiData=async(url)=>{      //api call
    dispatch({type:"SET_LOADER"})
    try{
      const res=await fetch(url);
      const data=await res.json();
      // console.log(data);
      dispatch({                    //dispatch triggers the action method of reducer
        type:"GET_INFO",
        payload:{
            hits:data.hits,
            nbPages:data.nbPages

        }
      })
    }catch(error){
      console.log(error);
    }
  };
  const removePost=(ID)=>{
    dispatch({type:"REMOVE_POST",payload:ID})
  }
  const searchNews=(squery)=>{
    dispatch({type:"SEARCH_POST",payload:squery})
  }
  useEffect(() => {
    if (state.query) {
        fetchApiData(`${API}query=${state.query}&page=${state.pages}`);
    }
}, [state.query, state.searchTrigger]);

    return(
      //function ko pass in provider,taki wo har jaagh lekr jaaye
        <AppContext.Provider value={{...state,removePost,searchNews}}>{children}</AppContext.Provider>
    )
}

//custom hook creation : hook returned inside customhook: "use" keyword used.
const useGlobalContext=()=>{
    return useContext(AppContext);
};


export {AppContext,AppProvider,useGlobalContext};