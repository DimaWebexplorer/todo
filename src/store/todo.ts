import { makeAutoObservable, runInAction } from 'mobx';
import axios from 'axios';

type Posts = {
    userId: number;
    id: number;
    title: string;
    body: string;
}

class Todo {
    public todoList = [
        { id: 1, title: 'task 1', completed: false },
        { id: 2, title: 'task 2', completed: false },
        { id: 3, title: 'task 3', completed: true },
        { id: 4, title: 'task 4', completed: false },
    ];

    public posts: Posts[] = [];

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

    axiosPostList() {
        axios.get<Posts[]>('https://jsonplaceholder.typicode.com/posts')
        .then(response => this.posts = response.data);
        console.log(this.posts);
    }

    getPostsAction = async () => {
        try {
            const response = await axios.get<Posts[]>('https://jsonplaceholder.typicode.com/posts');
            
            runInAction (() => {
                this.posts = response.data;
            });
        } catch (e) {
            console.log(e);
        }
    }
}

export default new Todo();