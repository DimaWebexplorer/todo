import List from "../List";
import addSvg from '../../../assets/icons/add.svg';
import scss from './ListFooter.module.scss';
import {useState} from "react";

export default function ListFooter(): JSX.Element {
    const [state, setState] = useState('Hello');
    return (
        <div className={scss["list-footer"]}>
            <List items={[
                {
                    icon: addSvg,
                    name: 'Добавить папку',
                    style: '0 3px'
                }
            ]} />
            <div className={scss["list-footer__popup"]}>
                Привет
            </div>
        </div>
    )
}