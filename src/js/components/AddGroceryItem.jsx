import React from 'react';
import { connect } from 'react-redux';
import { addGroceryItem } from '../actions/index';

function AddGroceryForm({ dispatch }) {
  let input;

  function handleSubmit() {
    const itemName = input.value;

    if (!itemName.trim()) {
      return;
    }

    dispatch(addGroceryItem(itemName));

    input.value = '';
  }

  return (
    <div>
      <input type="text" placeholder="Grocery..." ref={(node) => { input = node; }} />
      <button onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

AddGroceryForm.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
};

const AddGroceryItem = connect()(AddGroceryForm);

export default AddGroceryItem;
