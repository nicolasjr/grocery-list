import React from 'react';
import { connect } from 'react-redux';
import { addGroceryItem } from '../actions/index';

function AddGroceryForm({ dispatch }) {
  let input;

  function handleSubmit(e) {
    e.preventDefault();

    const itemName = input.value;

    if (!itemName.trim()) {
      return;
    }

    dispatch(addGroceryItem(itemName));

    input.value = '';
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Grocery..." ref={(node) => { input = node; }} />
      <input type="submit" value="Add" />
    </form>
  );
}

AddGroceryForm.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
};

const AddGroceryItem = connect()(AddGroceryForm);

export default AddGroceryItem;
