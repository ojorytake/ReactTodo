import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  // const [todos, setTodos] = useState([]);
  const [darkMode, setDarkMode] = useState(() => {
  const saved = localStorage.getItem("theme");
  return saved ? saved === "dark" : true;
});
  // 読み込み
  const [todos, setTodos] = useState(() => {
  const saved = localStorage.getItem("todos");
  return saved ? JSON.parse(saved) : [];
});
// 更新時に保存
useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);

useEffect(() => {
  localStorage.setItem("theme", darkMode ? "dark" : "light");
}, [darkMode]);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  // 保存
useEffect(() => {
  localStorage.setItem("theme", darkMode ? "dark" : "light");
}, [darkMode]);

// 初期読み込み
useEffect(() => {
  const saved = localStorage.getItem("theme");
  if (saved === "light") setDarkMode(false);
}, []);

  const add = () => {
    if (text.trim() === "") return;
    setTodos([...todos, text]);
    setText("");
  };

  const deleteTodo = (indexToDelete) => {
    const newTodos = todos.filter((_, index) => index !== indexToDelete);
    setTodos(newTodos);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      add();
    }
  };

  return (
    <div className={darkMode ? "todo dark" : "todo light"}>
      <h1>TodoList</h1>
      <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "☀️" : "🌙"}
      </button>

      <input
        className="input"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button className="add-btn" onClick={add}>
        追加
      </button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button className="dlt-btn" onClick={() => deleteTodo(index)}>
              削除
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
