import {createContext, useReducer} from "react";
import { copyMultidimensionalArray } from "../helpers/ArrayManipulation";

export const ADD_VALUE = "ADD_VALUE";
export const ADD_SEAT = "ADD_SEAT";
export const ADD_TABLE = "ADD_TABLE";
export const CLEAR = "CLEAR";

const itemsReducer = (state, action) => {
  switch(action.type) {
    case ADD_VALUE: {
      let newTables = copyMultidimensionalArray(state.tables);
      newTables[action.table][action.seat] += 1;
      return {...state, tables: newTables};
    }
    case ADD_SEAT: {
      let newTables = copyMultidimensionalArray(state.tables);
      newTables[action.table].push(0);
      return {...state, tables: newTables};
    }
    default: {
      return state;
    }
  }
}

export const TablesContext = createContext();
export const TablesProvider = ({initialState, children, ...rest}) => {
    const [store, dispatch] = useReducer(itemsReducer, initialState);
    console.log(store);
    return(
        <TablesContext.Provider value={{store, dispatch}}>
          {children}  
        </TablesContext.Provider>
    );
}

export default TablesProvider;