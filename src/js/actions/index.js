import actions from './actions';

let nextGroceryId = 0;

export function addGroceryItem(name) {
  const id = nextGroceryId;
  nextGroceryId += 1;

  return {
    type: actions.addItem,
    id,
    name,
  };
}

export function toggleGrocery(id) {
  return {
    type: actions.toggleItem,
    id,
  };
}

export function deleteGrocery(id) {
  return {
    type: actions.deleteItem,
    id,
  };
}

export function editGroceryName(id, name) {
  return {
    type: actions.editItem,
    id,
    name,
  };
}
