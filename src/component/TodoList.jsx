import React from "react";
import "./TodoList.css";

const TodoList = () => {
  const [tasks, setTasks] = React.useState([]);

  const [text, setText] = React.useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setText("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const completedTask = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          task.text = `${task.text} is completed`;
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div className="todo-list">
      <h1 className="title">Todo App</h1>
      <div className="input-btn">
        <input type="text" value={text} onChange={handleChange} />
        {text.length === 0 ? (
          <p
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "1rem 2rem",
              fontSize: "1.3rem",
              fontWeight: "bold",
              background: "red",
              color: "white",
            }}
          >
            Enter task.
          </p>
        ) : (
          <button onClick={() => addTask(text)}>add task</button>
        )}
      </div>
      {tasks.map((task) => (
        <div key={task.id} className="todo-item">
          <ul>
            <li className="list-items">
              {task.text.charAt(0).toUpperCase() + task.text.slice(1)}
            </li>
          </ul>
          <button onClick={() => deleteTask(task.id)} className="delete-btn">
            Delete
          </button>
          <button
            onClick={() => completedTask(task.id)}
            className="complete-btn"
          >
            Completed
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
