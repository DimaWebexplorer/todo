import { observer } from 'mobx-react-lite';
import todo from '../store/todo';

const Todo = observer(() => {
    return (
        <div>
            <button onClick={() => todo.fetchTodoList()}>Fetch todo</button>
            <button onClick={() => todo.axiosPostList()}>Axios post</button>
            {todo.todoList.map((item) => (
                <div key={item.id} style={{ display: 'flex', alignItems: 'center', padding: '8px' }}>
                    <input type="checkbox" checked={item.completed} onChange={() => todo.completeTodo(item)}/>
                    <h2>{item.title}</h2>
                    <button onClick={() => todo.removeTodo(item.id)}>Remove</button>
                </div>
            ))}
            {todo.posts.map((item) => (
                <div key={item.id} style={{ display: 'flex', alignItems: 'center', padding: '8px' }}>
                    <h2>{item.title}</h2>
                </div>
            ))}
        </div>
    )
})

export default Todo;