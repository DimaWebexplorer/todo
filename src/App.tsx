import List from "./components/List/List";
import listSvg from './assets/icons/list.svg';
import addSvg from './assets/icons/add.svg';

function App() {
  return (
    <div className="todo">
      <div className="todo__sidebar">
        <List items={[
          {
            icon: listSvg,
            name: 'Все задачи',
            active: true,
          }
        ]} />

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

        <List items={[
          {
            icon: addSvg,
            name: 'Добавить папку',
          }
        ]} />
      </div>
      <div className="todo__tasks"></div>
    </div>
  )
}

export default App
