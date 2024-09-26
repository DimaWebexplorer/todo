import scss from './List.module.scss';
interface Item {
    icon?: string;
    color?: string;
    name: string;
    id?: number,
    active?: boolean,
    style?: string,
}

interface ListProps {
    items: Item[];
    isRemovable?: boolean;
    click?: () => void;
}


export default function List({ items, isRemovable, click }: ListProps): JSX.Element {
    if (isRemovable) { 
        console.log('isRemovable')
    }
    return (
        <ul onClick={click} className={scss.list}>
            {
                items.map((item) => (
                    <li key={item.id} className={item.active ? scss.active : ""}>
                        <i>
                            {item.icon ? <img src={item.icon} alt="list-icon" style={{margin: item.style}}/> : <i className={scss.badge} style={{backgroundColor: item.color}}> </i>}
                        </i>
                        <span>{item.name}</span>
                    </li>
                ))
            }
        </ul>
    )
}

