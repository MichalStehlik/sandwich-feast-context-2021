import {createContext, useState} from "react";

export const TablesContext = createContext();
export const TablesProvider = ({initialState, children, ...rest}) => {
    const [name, setName] = useState(initialState.name);
    const [tables, setTables] = useState(initialState.tables);
    return(
        <TablesContext.Provider value={{name, setName, tables, setTables}}>
          {children}  
        </TablesContext.Provider>
    );
}

export default TablesProvider;