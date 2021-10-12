import {useContext} from "react";
import {TablesContext} from "../providers/TablesProvider";
import Seat from "./Seat";
import { arraySum } from "../helpers/ArrayManipulation";

export const Table = ({index}) => {
    const {tables} = useContext(TablesContext);
    let sum = arraySum(tables[index]);
    let total = arraySum(tables);
    return(
        <div>
            <h2>Stůl: {index + 1}</h2>
            <p>{sum} ({(total > 0) ? Math.round(sum / total * 100) : 0}%)</p>
            {tables[index] ? tables[index].map(
            (item, seatIndex) => (<Seat key={seatIndex} table={index} seat={seatIndex} />)
            ) : null}
        </div>
    );
}

export default Table;