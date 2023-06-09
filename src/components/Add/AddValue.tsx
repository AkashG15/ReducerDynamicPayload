import { useReducer } from "react";

type stateType={
    username:"xyz"; //this is a custom type
    count:number,
    status:string
}
//check AddValue component

type actionType={type:string};
const reducerFun = (state: stateType, action: actionType) => {
  // console.log("state",state);
  // console.log("action",action);
  switch (action.type) {
    case "increment":
      return {...state,count:state.count+1,status:action.type};
    case "decrement":
      return {...state,count:state.count-1,status:action.type};

    default:
        return state;
  }
};


const initialState:stateType={count:0,status:"start",username:"xyz"}

const AddValue = () => {
  const [state,dispatch] = useReducer(reducerFun, initialState);
  return <div>
    
  <p>count:{state.count}</p>  <br/>
  <p>status:{state.status}</p> <br/>

  <button type="button" onClick={()=>{ dispatch({type:"increment"})}}>Increment</button><br/>
  <button type="button" onClick={()=>{ dispatch({type:"decrement"})}}>Decrement</button>

  </div>;
};

export default AddValue;
