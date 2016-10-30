import React, { PropTypes } from 'react';
import GroceryItem from './GroceryItem';

const propTypes = {
  groceries: PropTypes.arrayOf(
    PropTypes.object.isRequired
  ).isRequired,
  actions: PropTypes.object.isRequired,
};

function Groceries({ groceries, actions }) {
  function createItems(g) {
    const toggleItem = () => {
      actions.onItemCheck(g.id);
    };

    const deleteItem = () => {
      actions.onDeleteItem(g.id);
    };

    const editItem = (name) => {
      actions.onEditItem(g.id, name);
    };

    let className = 'grocery';
    className += (g.checked) ? ' checked' : '';

    const item = {
      checked: g.checked,
      name: g.name,
      toggleItem,
      deleteItem,
      editItem,
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
