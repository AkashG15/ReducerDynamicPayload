type userStateType = {
    userName: string,
    age:number,
    cmp: string
}

type actionType = {
    type: string,
    payload: {
        newAge?: number,
        newName?: string,
        newCmp?: string,
    }
}

export const intialUserState: userStateType = {
  userName: "",
  age: 0,
  cmp: "",
};

const reducerFun = (state: userStateType, action: any) => {
  switch (action.type) {
    case "setUserName":
      console.log("action", action);
      return {
        ...state,
        userName: action.payload.newName,
      };
    case "setUserAge":
      console.log("action", action);
      return {
        ...state,
        age: action.payload.newAge,
      };
    case "setUserCmp":
      console.log("action", action);
      return {
        ...state,
        cmp: action.payload.newCmp,
      };

    default:
      return state;
  }
};

export default reducerFun;
