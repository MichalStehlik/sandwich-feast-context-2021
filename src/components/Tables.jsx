import {useContext} from "react";
import {TablesContext} from "../providers/TablesProvider";
import {Table} from "./Table";
import { arraySum } from "../helpers/ArrayManipulation";

const Tables = () => {
    const {name, tables} = useContext(TablesContext);
    let total = arraySum(tables);
    return(
        <div>
            <h1>{name}</h1>
            <p>{total}</p>
            {tables ? tables.map(
            (item, index) => (<Table key={index} index={index} />)
            ) : null}
        </div>
    );
}

export default Tables;