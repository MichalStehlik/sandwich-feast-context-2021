import {useContext} from "react";
import {TablesContext} from "../providers/TablesProvider";

export const Seat = ({table, seat}) => {
    const {tables} = useContext(TablesContext);
    return(
        <button >{tables[table][seat]}</button>
    );
}

export default Seat;