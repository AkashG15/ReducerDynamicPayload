import { useEffect, useReducer, useState } from "react";
import styless from "./UserInfo.module.scss";
import reducerFun, { intialUserState } from "../store/reducerFun";

const UserInfo = () => {
  const [state, dispatch] = useReducer(reducerFun, intialUserState);

  useEffect(()=>{

  },[])

  const submitData = () => {
    console.log("state", state);
    const ageInput=document.getElementById("age");
    console.log("ageInput",ageInput);
  };


  const userDispatchFun = (newName: any) => {
    dispatch({ type: "setUserName", payload: { newName } });
  };

  const ageDispatchFun = (newAge: any) => {
    dispatch({ type: "setUserAge", payload: { newAge } });
  };

  const cmpDispatchFun = (newCmp: any) => {
    if (state.userName === newCmp) {
      alert("company name can not be same as username");
      return;
    }
    dispatch({ type: "setUserCmp", payload: { newCmp } });
  };
  
  return (
      <div className={styless.userWrapper}>
      <div className={styless.formcontrol}>
        <label htmlFor="userName">User Name</label>
        <input
          type="text"
          name="userName"
          id="userName"
          value={state.userName}
          onChange={(e) => userDispatchFun(e.target.value)}
          placeholder="Enter your user name"
        />
      </div>

      <div className={styless.formcontrol}>
        <label htmlFor="age">Age</label>
        <input
          type="number"
          name="age"
          id="age"
          placeholder="Enter your age"
          value={state.age}
          onChange={(e) => ageDispatchFun(e.target.value)}
        />
      </div>

      <div className={styless.formcontrol}>
        <label htmlFor="cmp">Company</label>
        <input
          type="text"
          name="cmp"
          id="cmp"
          value={state.cmp}
          onChange={(e) => cmpDispatchFun(e.target.value)}
          placeholder="Enter your company name"
        />
      </div>
      <button type="button" onClick={submitData}>
        {" "}
        submit
      </button>
    </div>
  );
};

export default UserInfo;