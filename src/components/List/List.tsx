import scss from './List.module.scss';
interface Item {
    icon?: string;
    color?: string;
    name: string;
    active?: boolean,
}

interface ListProps {
    items: Item[];
    isRemovable?: boolean;
}


export default function List({ items, isRemovable }: ListProps): JSX.Element {
    if (isRemovable) { 
        console.log('isRemovable')
    }
    return (
        <ul className={scss.list}>
            {
                items.map((item, index) => (
                    <li key={index} className={item.active ? scss.active : ""}>
                        <i>
                            {item.icon ? <img src={item.icon} alt="list-icon" /> : <i className={`${scss.badge} ${scss[`badge_${item.color}`]}`}> </i>}
                        </i>
                        <span>{item.name}</span>
                    </li>
                ))
            }
        </ul>
    )
}

