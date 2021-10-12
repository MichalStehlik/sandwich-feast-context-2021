import {useContext} from "react";
import {TablesContext} from "../providers/TablesProvider";
import {Table} from "./Table";
import { arraySum } from "../helpers/ArrayManipulation";

const Tables = () => {
    const {store} = useContext(TablesContext);
    let total = arraySum(store.tables);
    return(
        <div>
            <h1>{store.name}</h1>
            <p>{total}</p>
            {store.tables ? store.tables.map(
            (item, index) => (<Table key={index} index={index} />)
            ) : null}
        </div>
    );
}

export default Tables;