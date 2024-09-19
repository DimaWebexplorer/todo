import List from "../List";
import addSvg from '../../../assets/icons/add.svg';
import scss from './ListFooter.module.scss';
import { useState } from "react";
import Button from "../../Button/Button";
import Input from "../../Input/Input";
import Badge from "../../Badge/Badge";
import dataBase from '../../../assets/database.json';
import closePopup from '../../../assets/icons/closePopup.svg'


export default function ListFooter(): JSX.Element {
    const [visiblePopup, setVisiblePopup] = useState(false);
    const [selectedColor, setSelectedColor] = useState(dataBase.colors[0].id);
    return (
        <div className={scss["list-footer"]}>
            <List click={() => { setVisiblePopup(!visiblePopup) }} items={[
                {
                    icon: addSvg,
                    name: 'Добавить папку',
                    style: '0 3px'
                }
            ]} />
            {
                visiblePopup &&
                <div className={scss["list-footer__popup"]}>
                    <img src={closePopup} alt="closePopup" className={scss["list-footer__popup-close"]} onClick={() => { setVisiblePopup(false) }} />
                    <Input content="Название папки" grow />
                    <div className={scss["list-footer__popup-colors"]}>
                        {
                            dataBase.colors.map((color) => (
                                <Badge key={color.id} size={'18px'} color={color} click={() => { setSelectedColor(color.id) }} active={color.id === selectedColor ? true : false} />
                            ))
                        }
                    </div>
                    <Button content="Добавить" grow />
                </div>
            }
        </div>
    )
}