import {useContext} from "react";
import {TablesContext} from "../providers/TablesProvider";
import Seat from "./Seat";

export const Table = ({index}) => {
    const {tables} = useContext(TablesContext);
    return(
        <div>
            <h2>Stůl: {index + 1}</h2>
            {tables[index] ? tables[index].map(
            (item, seatIndex) => (<Seat key={seatIndex} table={index} seat={seatIndex} />)
            ) : null}
        </div>
    );
}

export default Table;