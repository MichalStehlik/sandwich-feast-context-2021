import {useContext} from "react";
import {TablesContext, ADD_SEAT} from "../providers/TablesProvider";
import Seat from "./Seat";
import { arraySum } from "../helpers/ArrayManipulation";

export const Table = ({index}) => {
    const {store, dispatch} = useContext(TablesContext);
    let sum = arraySum(store.tables[index]);
    let total = arraySum(store.tables);
    return(
        <div>
            <h2>Stůl: {index + 1}</h2>
            <p>{sum} ({(total > 0) ? Math.round(sum / total * 100) : 0}%)</p>
            {store.tables[index] ? store.tables[index].map(
            (item, seatIndex) => (<Seat key={seatIndex} table={index} seat={seatIndex} />)
            ) : null}
            <button onClick={e => {dispatch({type: ADD_SEAT, table: index})}}>+</button>
        </div>
    );
}

export default Table;