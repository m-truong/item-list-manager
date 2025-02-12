import { useState } from "react";
import "h8k-components";

import "./App.css";

function App() {
  // internal state
  const [items, setItems] = useState([]);

  // used for the input field
  const [input, setInput] = useState("");
  // the original state is a data-structure string""
  // then "" after every onChange() event it keeps concatenating the state
  // ==> by creating a copy of the state

  // called for when clicking the React button
  const handleAddItem = (e) => {
    // TODO: Add logic to add input to items list
    // add logic to parse the text input and then render the text input as a component underneath the list
    console.log('here', e);
    e.preventDefault();

    // edge-case for if input state contains an empty string"""
    if (input.trim() !== "") {
      // IF-AFTER trimming, and it's still an empty-string"" then it won't enter the if-block."
    }
  };

  return (
    <>
      <h8k-navbar header="Item List Manager"></h8k-navbar>
      <div className="App">
        <h3>Item List</h3>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter item"
          data-testid="input-field"
        />
        <button onClick={handleAddItem} data-testid="add-button">
          Add Item
        </button>
        <ul data-testid="item-list">
        {/* uses JSX .map() functionality to map over the items array inside the current React-Component */}
        {/* each listed-item hasa key that is the index */}
          {items.map((item, index) => (
            <li key={index} data-testid="list-item">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
