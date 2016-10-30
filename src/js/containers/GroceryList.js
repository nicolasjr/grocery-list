import { connect } from 'react-redux';
import { toggleGrocery, deleteGrocery } from '../actions/index';
import Groceries from '../components/Groceries';

function mapStateToProps(state) {
  return {
    groceries: state,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onItemCheck: (id) => {
      dispatch(toggleGrocery(id));
    },
    onDeleteItem: (id) => {
      dispatch(deleteGrocery(id));
    },
  };
}

const GroceryList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Groceries);

export default GroceryList;
