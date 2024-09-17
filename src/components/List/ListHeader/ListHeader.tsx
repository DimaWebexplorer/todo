import List from "../List";
import listSvg from '../../../assets/icons/list.svg';
import scss from './ListHeader.module.scss';

export default function ListHeader(): JSX.Element {
    return (
        <div className={scss["list-header"]}>
            <List items={[
                {
                    icon: listSvg,
                    name: 'Все задачи',
                    active: true
                }
            ]} />
        </div>
    )
}