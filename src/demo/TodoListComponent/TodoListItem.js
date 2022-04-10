import React, { Component,Fragment } from 'react';
import PropTypes from 'prop-types';

class TodoListItem extends Component {
  constructor(props){
    super(props)
    this.handleChildItem = this.handleChildItem.bind(this);
  }
  render(){
    const { content } = this.props
    return (
      <Fragment>
        <li onClick={this.handleChildItem}>{content}</li>
      </Fragment>
    )
  }
  handleChildItem(){
    const { keyValue, itemDelete } = this.props;
    itemDelete(keyValue)
  }
}

TodoListItem.propTypes = {
  test: PropTypes.string,
  content: PropTypes.string,
  keyValue: PropTypes.number,
  itemDelete: PropTypes.func
}

TodoListItem.defaultProps = {
  test: 'hello world'
}

export default TodoListItem;