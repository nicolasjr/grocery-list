import React from 'react';
import AddGroceryItem from './components/AddGroceryItem';
import GroceryList from './containers/GroceryList';

function App() {
  return (
    <div>
      <div className="container">
        <AddGroceryItem />
        <div className="row">
          <GroceryList />
        </div>
      </div>
    </div>
  );
}

export default App;
