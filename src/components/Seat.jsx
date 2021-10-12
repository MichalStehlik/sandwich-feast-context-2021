import {useContext} from "react";
import {TablesContext} from "../providers/TablesProvider";
import {copyMultidimensionalArray} from "../helpers/ArrayManipulation";

export const Seat = ({table, seat}) => {
    const {tables, setTables} = useContext(TablesContext);
    const addValue = (tables, table, seat) => {
        let newTables = copyMultidimensionalArray(tables);
        newTables[table][seat] += 1;
        setTables(newTables);
    }
    return(
        <button onClick={e => {addValue(tables, table, seat)}}>{tables[table][seat]}</button>
    );
}

export default Seat;