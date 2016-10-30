import React, { PropTypes } from 'react';

const propTypes = {
  htmlFor: PropTypes.string.isRequired,
  item: PropTypes.object.isRequired,
};

class GroceryItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
      name: this.props.item.name,
    };

    this.handleEdit = this.handleEdit.bind(this);
    this.handleRename = this.handleRename.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
  }

  handleEdit() {
    this.setState({
      isEditing: true,
    });
  }

  handleRename(e) {
    e.preventDefault();

    this.props.item.editItem(this.state.name);

    this.setState({
      isEditing: false,
    });
  }

  handleChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  createItemInput() {
    return (
      <form onSubmit={this.handleRename}>
        <textarea type="text" value={this.state.name} onChange={this.handleChangeName} />
        <input type="submit" value="Save" />
      </form>
    );
  }

  createItemParagraph() {
    return <p>{this.state.name}</p>;
  }

  createItemName() {
    return this.state.isEditing ? this.createItemInput() : this.createItemParagraph();
  }

  render() {
    const item = this.props.item;
    return (
      <div className="row">
        <div className="checkbox-inline">
          <label htmlFor={this.props.htmlFor}>
            <input type="checkbox" checked={item.checked} onChange={item.toggleItem} />
          </label>
        </div>
        {this.createItemName()}
        <button className="btn btn-link btn-task" onClick={item.deleteItem}>
          <span className="glyphicon glyphicon-trash" />
        </button>
        <button className="btn btn-link btn-task" onClick={this.handleEdit}>
          <span className="glyphicon glyphicon-pencil" />
        </button>
      </div>
    );
  }
}

GroceryItem.propTypes = propTypes;

export default GroceryItem;
