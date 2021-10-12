import {useContext} from "react";
import {TablesContext} from "../providers/TablesProvider";
import {Table} from "./Table";

const Tables = () => {
    const {name, tables} = useContext(TablesContext);
    return(
        <div>
            <h1>{name}</h1>
            {tables ? tables.map(
            (item, index) => (<Table key={index} index={index} />)
            ) : null}
        </div>
    );
}

export default Tables;