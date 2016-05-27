import React from 'react';

var ChatMessage  = React.createClass({
  getInitialState: function() {
    return {}
  },
  render() {
    return (
      <div className="message">
        <p>
          <small><b>{this.props.author}</b></small> : <span>{this.props.message}</span>
          <span className="message-date">({this.props.createdAt})</span>
        </p>
      </div>
    )
  }
})

module.exports = ChatMessage;
