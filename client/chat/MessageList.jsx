import React from 'react';
var moment = require('moment');
require('moment/locale/it');

import ChatMessage from './ChatMessage.jsx';

var MessageList = React.createClass({
  getInitialState: function() {
    return {};
  },
  render: function() {
    var comments = this.props.messages.map(function(message) {
      return <ChatMessage message={message.text} author={message.author} key={message._id} createdAt={moment(message.createdAt).format('HH:mm')} />
    });
    return (
      <div className="messages">
          {comments}
      </div>
    )
  }
})

module.exports = MessageList;
