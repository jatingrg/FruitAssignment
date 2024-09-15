import React, { useState } from "react";
import './FAQ.css'; 

const FAQ = () => {
  
  const [items, setItems] = useState([]);
  
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  
  const getCurrentDate = () => {
    const date = new Date();
    return date.toLocaleDateString(); 
  };

  
  const handleSave = () => {
    if (title.trim() === "" || description.trim() === "") return;

    const newItem = {
      title,
      description,
      date: getCurrentDate(),
    };

    if (editingIndex !== null) {
    
      const updatedItems = [...items];
      updatedItems[editingIndex] = newItem;
      setItems(updatedItems);
      setEditingIndex(null);
    } else {
    
      setItems([...items, newItem]);
    }

    
    setTitle("");
    setDescription("");
  };


  const handleDelete = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };


  const handleEdit = (index) => {
    const item = items[index];
    setTitle(item.title);
    setDescription(item.description);
    setEditingIndex(index);
  };

  return (
    <div className="crud-app">
      <h1>FAQ</h1>

      <div className="input-container">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter title"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter description"
        />
        <button onClick={handleSave}>
          {editingIndex !== null ? "Update Item" : "Add Item"}
        </button>
      </div>

      <ul className="item-list">
        {items.map((item, index) => (
          <li key={index} className="item">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <small>{item.date}</small>
            <div className="item-actions">
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQ;
