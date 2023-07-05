import React, { useState, useEffect, useContext } from "react";
import Modal from "../components/Modal";
import axios from "axios";
import "../api/axiosInstance";
import Context from "../Context";

function TodoList() {
  const [viewCompleted, setViewCompleted] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [activeItem, setActiveItem] = useState({
    title: "",
    description: "",
    completed: false,
  });

  const [appState, setAppState] = useContext(Context);

  const updateLoadingState = (isLoading) => {
    setAppState({ ...appState, loading: isLoading });
  };

  useEffect(() => {
    refreshList();
  }, []);

  const refreshList = async () => {
    updateLoadingState(true);
    await axios
      .get("/api/todos/")
      .then((res) => {
        setTodoList(res.data);
      })
      .catch((err) => console.log(err));

    updateLoadingState(false);
  };

  const handleSubmit = (item) => {
    setShowModal(false);
    updateLoadingState(true);

    if (item.id) {
      axios.put(`/api/todos/${item.id}/`, item).then((res) => refreshList());
      return;
    }
    axios.post("/api/todos/", item).then((res) => refreshList());
  };

  const handleDelete = (item) => {
    updateLoadingState(true);
    axios.delete(`/api/todos/${item.id}/`).then((res) => refreshList());
  };

  const createItem = () => {
    const item = { title: "", description: "", completed: false };

    setActiveItem(item);
    setShowModal(true);
  };

  const editItem = (item) => {
    setActiveItem(item);
    setShowModal(true);
  };

  const renderTabList = () => {
    return (
      <div className="nav nav-tabs">
        <span
          className={viewCompleted ? "nav-link active" : "nav-link"}
          onClick={() => setViewCompleted(true)}
        >
          Complete
        </span>
        <span
          className={viewCompleted ? "nav-link" : "nav-link active"}
          onClick={() => setViewCompleted(false)}
        >
          Incomplete
        </span>
      </div>
    );
  };

  const renderItems = () => {
    const filteredItems = todoList.filter(
      (item) => item.completed === viewCompleted
    );

    return filteredItems.map((item) => (
      <li
        key={item.id}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        <span
          className={`todo-title mr-2 ${viewCompleted ? "completed-todo" : ""}`}
          title={item.description}
        >
          {item.title}
        </span>
        <span>
          <button
            className="btn btn-secondary mr-2"
            onClick={() => editItem(item)}
          >
            Edit
          </button>
          <button className="btn btn-danger" onClick={() => handleDelete(item)}>
            Delete
          </button>
        </span>
      </li>
    ));
  };

  return (
    <div className="todo-list">
      <div className="mb-4 d-flex">
        <button className="btn btn-primary" onClick={createItem}>
          Add task
        </button>
      </div>
      {renderTabList()}
      <ul className="list-group list-group-flush border-top-0">
        {renderItems()}
      </ul>

      {showModal && <Modal activeItem={activeItem} onSave={handleSubmit} />}
    </div>
  );
}

export default TodoList;
