import React, { PropTypes } from 'react';
import GroceryItem from './GroceryItem';

const propTypes = {
  groceries: PropTypes.arrayOf(
    PropTypes.object.isRequired
  ).isRequired,
  onItemCheck: PropTypes.func.isRequired,
  onDeleteItem: PropTypes.func.isRequired,
};

function Groceries({ groceries, onItemCheck, onDeleteItem }) {
  function createItems(g) {
    const toggleItem = () => {
      onItemCheck(g.id);
    };

    const deleteItem = () => {
      onDeleteItem(g.id);
    };

    let className = 'grocery';
    className += (g.checked) ? ' checked' : '';

    const item = {
      checked: g.checked,
      name: g.name,
      toggleItem,
      deleteItem,
    };

    return (
      <li key={g.id} className={className}>
        <GroceryItem htmlFor="check item" item={item} />
      </li>
    );
  }

  const items = groceries.map(createItems);

  return (
    <ul>
      {items}
    </ul>
  );
}

Groceries.propTypes = propTypes;

export default Groceries;