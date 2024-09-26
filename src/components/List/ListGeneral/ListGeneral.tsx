import List from "../List";
import scss from './ListGeneral.module.scss';
import dataBase from '../../../assets/database.json';
import { useState } from "react";

export default function ListGeneral(): JSX.Element {
    const [lists, setLists] = useState(
        dataBase.lists.map((item) => (
            { id: item.id, name: item.name, color: dataBase.colors.find(color => color.id === item.colorId)?.hex }
        ))
    );
    return (
        <div className={scss["list-general"]}>
            <List items={lists} isRemovable />
        </div>
    )
}