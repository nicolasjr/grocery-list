import actions from '../actions/actions';

function addItem(name, id) {
  return {
    id,
    name,
    checked: false,
  };
}

function toggleItem(items, itemId) {
  return items.map((i) => {
    if (i.id !== itemId) {
      return i;
    }

    return Object.assign({}, i, {
      checked: !i.checked,
    });
  });
}

function deleteItem(items, itemId) {
  function getItemId(item) {
    return item.id;
  }

  const pos = items.map(getItemId).indexOf(itemId);
  return [
    ...items.slice(0, pos),
    ...items.slice(pos + 1),
  ];
}

function groceryItems(state = [], action) {
  switch (action.type) {
    case actions.addItem:
      return [
        ...state,
        addItem(action.name, action.id),
      ];
    case actions.toggleItem:
      return toggleItem(state, action.id);
    case actions.deleteItem:
      return deleteItem(state, action.id);
    default:
      return state;
  }
}

export default groceryItems;
