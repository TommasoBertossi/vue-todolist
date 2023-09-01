const { createApp } = Vue

  createApp({
    data() {
      return {
        title: 'To do list',

        todoList: [
            {
                text: 'Task 1',
                done: true,
            },
            {
                text: 'Task 2',
                done: false,
            },
            {
                text: 'Task 3',
                done: false,
            },
        ],
        newTodo: {
            text: 'New task',
            done: false,
        },
      };
    },

    methods: {
        deleteTodo(index) {
            this.todoList.splice(index, 1);
        },

        doneTodo(todo) {
            todo.done = !todo.done;
        },

        addNewTask() {
            const newTodoCopy = { ...this.newTodo};
            this.todoList.push(newTodoCopy);
        }
    },
  }).mount('#app');