import ListHeader from './components/List/ListHeader/ListHeader';
import ListGeneral from './components/List/ListGeneral/ListGeneral';
import ListFooter from './components/List/ListFooter/ListFooter';

function App() {
  return (
    <div className="todo">
      <div className="todo__sidebar">
        <ListHeader />

        <ListGeneral />

        <ListFooter />
      </div>
      <div className="todo__tasks"></div>
    </div>
  )
}

export default App
