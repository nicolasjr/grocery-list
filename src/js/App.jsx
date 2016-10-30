import React from 'react';
import AddGroceryItem from './components/AddGroceryItem';
import GroceryList from './containers/GroceryList';

function App() {
  return (
    <div>
      <AddGroceryItem />
      <GroceryList />
    </div>
  );
}

export default App;
