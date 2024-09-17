import List from "../List";
import scss from './ListGeneral.module.scss';

export default function ListGeneral(): JSX.Element {
    return (
        <div className={scss["list-general"]}>
            <List items={[
                {
                    color: 'green',
                    name: 'Покупки',
                },
                {
                    color: 'blue',
                    name: 'Фронтенд',
                },
                {
                    color: 'pink',
                    name: 'Фильмы и сериалы',
                },
                {
                    color: 'light-green',
                    name: 'Книги',
                },
                {
                    color: 'grey',
                    name: 'Личное',
                },

            ]} isRemovable />
        </div>
    )
}