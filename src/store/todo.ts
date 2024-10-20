import { makeAutoObservable } from 'mobx';

class Todo {
    public todoList = [
        { id: 1, title: 'task 1', completed: false },
        { id: 2, title: 'task 2', completed: false },
        { id: 3, title: 'task 3', completed: true },
        { id: 4, title: 'task 4', completed: false },
    ];

    constructor() {
        makeAutoObservable(this);
    }

    addTodo(todo: { id: number; title: string; completed: boolean }) {
        this.todoList.push(todo);
    }

    removeTodo(id: number) {
        this.todoList = this.todoList.filter((item) => item.id !== id);
    }

    completeTodo(todo: { id: number; title: string; completed: boolean }) {
        todo.completed = !todo.completed;
    }

    fetchTodoList() {
        fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => this.todoList = [...this.todoList, ...json]);
    }
}

export default new Todo();