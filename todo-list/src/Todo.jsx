import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { MdModeEditOutline } from "react-icons/md";
import "./Todo.css";
import { RiLogoutBoxFill } from "react-icons/ri";
import Layout from "./Layout";
import { useNavigate } from "react-router-dom";

function Todo() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [newTask, setnewTask] = useState("");
  const [editIndex, seteditIndex] = useState(null);
  const [editText, seteditText] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const storedTask = JSON.parse(localStorage.getItem("tasks"));
    console.log({ storedTask });
    if (storedTask) {
      setTasks([...storedTask]);
    }
  }, []);

  function addTask() {
    if (newTask.trim().length) {
      const taskExists = tasks.some((task) => task.text === newTask);

      if (!taskExists) {
        setTasks([...tasks, { text: newTask, completed: false }]);
        setnewTask("");
      } else {
        alert("Task already exists!");
      }
    }
  }

  function deleteTask(i) {
    setTasks(tasks.filter((item, index) => i !== index));
  }

  function startEdit(index) {
    seteditIndex(index);
    seteditText(tasks[index].text);
  }

  function saveEdit(index) {
    const updatedtasks = [...tasks];
    updatedtasks[index].text = editText;
    setTasks(updatedtasks);
    seteditText("");
    seteditIndex(null);
  }

  function toggleCheck(index) {
    const newli = [...tasks];
    newli[index].completed = !newli[index].completed;
    setTasks(newli);
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  return (
    <Layout>
      <div className="add-task">
        <button
          className="buttons"
          onClick={() => navigate("/", { replace: true })}
        >
          <RiLogoutBoxFill />
        </button>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setnewTask(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Enter task"
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <ul className="todo-list">
        {tasks.map((item, index) => (
          <li key={index} className={editIndex === index ? "editing" : ""}>
            {editIndex !== index ? (
              <>
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => toggleCheck(index)}
                />
                {!item.completed ? (
                  <span>{item.text}</span>
                ) : (
                  <span>
                    <del>{item.text}</del>
                  </span>
                )}
                <div className="actions">
                  <button onClick={() => startEdit(index)}>
                    <MdModeEditOutline />
                  </button>
                  <button onClick={() => deleteTask(index)}>
                    <MdDelete />
                  </button>
                </div>
              </>
            ) : (
              <>
                <input
                  value={editText}
                  onChange={(e) => seteditText(e.target.value)}
                />
                <button onClick={() => saveEdit(index)}>Save</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export default Todo;
