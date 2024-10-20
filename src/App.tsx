import ListHeader from './components/List/ListHeader/ListHeader';
import ListGeneral from './components/List/ListGeneral/ListGeneral';
import ListFooter from './components/List/ListFooter/ListFooter';
import Counter from './mobxComponents/Counter';
import Todo from './mobxComponents/Todo';

function App() {
  return (
    <div className="todo">
      <div className="todo__sidebar">
        <ListHeader />

        <ListGeneral />

        <ListFooter />
      </div>
      <div className="todo__tasks"></div>
    <Counter/>
    <Todo/>
    </div>
  )
}

export default App
