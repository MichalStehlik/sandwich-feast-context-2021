import {useContext} from "react";
import {TablesContext, ADD_VALUE} from "../providers/TablesProvider";

export const Seat = ({table, seat}) => {
    const {store, dispatch} = useContext(TablesContext);
    return(
        <button onClick={
            e => {dispatch({type: ADD_VALUE, table: table, seat: seat})}
        }>{store.tables[table][seat]}</button>
    );
}

export default Seat;