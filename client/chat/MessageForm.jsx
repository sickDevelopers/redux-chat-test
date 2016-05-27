import React from 'react';

var MessageForm = React.createClass({
  getInitialState: function() {
    return {
      author: '',
      text: ''
    };
  },

  handleAuthorChange: function(e) {
    this.setState({
      author: e.target.value
    })
  },

  handleTextChange: function(e) {
    this.setState({
      text: e.target.value
    })
  },

  handleSubmit: function(e) {
    e.preventDefault();
    this.setState({
      author: this.state.author.trim(),
      text: this.state.text.trim()
    });
    this.props.onMessageSubmit(this.state);
  },

  render: function() {
    return (
      <div className="message-form-box">
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="messageAuthor" value={this.state.author} onChange={this.handleAuthorChange} placeholder="Author"></input>
          <input type="text" name="messageText" value={this.state.text} onChange={this.handleTextChange} placeholder="Text"></input>
          <input type="submit" value="Invia"></input>
        </form>
      </div>
    )
  }
})

module.exports = MessageForm;
