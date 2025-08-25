import React, { useState } from "react";
import "./App.css";

const initialItems = [
  { id: 1, text: "Buy groceries", pinned: false },
  { id: 2, text: "Call Alice", pinned: false },
  { id: 3, text: "Meeting with Bob", pinned: false },
  { id: 4, text: "Pay electricity bill", pinned: false },
  { id: 5, text: "Read a book", pinned: false },
  { id: 6, text: "Go for a walk", pinned: false },
  { id: 7, text: "Fix bug #234", pinned: false },
  { id: 8, text: "Review pull requests", pinned: false },
];

function App() {
  const [items, setItems] = useState(initialItems);

  const togglePin = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, pinned: !item.pinned } : item
      )
    );
  };

  const pinnedItems = items.filter((item) => item.pinned);
  const unpinnedItems = items.filter((item) => !item.pinned);

  const sortedItems = [...pinnedItems, ...unpinnedItems];

  return (
    <div className="app-container">
      <h2 >Pin Items To Top</h2>
      <ul  className="item-list">
        {sortedItems.map((item) => (
          <li
            key={item.id}
            className={`item ${item.pinned ? "pinned" : ""}`}
          >
            <input
              type="checkbox"
              checked={item.pinned}
              onChange={() => togglePin(item.id)}
              className="pin-checkbox"
            />
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
