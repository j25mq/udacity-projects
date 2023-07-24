import "./App.css";
import { useState } from "react";
import CreateNewItem from "./CreateNewItem";
import ItemList from "./ItemList";
import DeleteLastItem from "./DeleteLastItem";
const App = () => {
  const [items, setItems] = useState([]);
  const handleAddItem = (item) => {
    setItems([...items, item]);
  };
  const handleDeleteLastItem = (event) => {
    setItems(items.slice(0, -1));
  };
  const noItemsFound = () => items.length === 0;
  return (
    <div className="App">
      <header className="App-header">
        <h2>Shopping List</h2>
      </header>
      <div className="container">
        <CreateNewItem onAddItem={handleAddItem} />
        <ItemList items={items} />
        <DeleteLastItem
          onDeleteLastItem={handleDeleteLastItem}
          buttonDisabled={noItemsFound()}
        />        
      </div>
    </div>
  );
};
export default App;