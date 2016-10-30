import React, { PropTypes } from 'react';

const propTypes = {
  htmlFor: PropTypes.string.isRequired,
  item: PropTypes.object.isRequired,
};

function GroceryItem({ htmlFor, item }) {
  return (
    <div className="row">
      <div className="checkbox-inline">
        <label htmlFor={htmlFor}>
          <input type="checkbox" checked={item.checked} onChange={item.toggleItem} />
        </label>
      </div>
      <p>{item.name}</p>
      <button className="btn btn-link btn-task" onClick={item.deleteItem}>
        <span className="glyphicon glyphicon-trash" />
      </button>
      <button className="btn btn-link btn-task">
        <span className="glyphicon glyphicon-pencil" />
      </button>
    </div>
  );
}

GroceryItem.propTypes = propTypes;

export default GroceryItem;
