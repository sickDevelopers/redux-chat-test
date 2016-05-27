import React, { PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { ChatMessages } from '../../model/ChatMessages.js';
import MessageList from './MessageList.jsx';
import MessageForm from './MessageForm.jsx';

var Chat =  React.createClass( {
  getInitialState() {
    return { }
  },
  handleMessageSubmit(message) {
    ChatMessages.insert(Object.assign(message, {
      createdAt: new Date()
    }));
  },
  render() {
    return (
      <div>
          <div className="chat-box">
            <div className="messages-box">
              <MessageList messages={this.props.chatMessages}/>
            </div>
          </div>
          <MessageForm onMessageSubmit={this.handleMessageSubmit}/>
      </div>
    )
  }

});

Chat.propTypes = {
  chatMessages: PropTypes.array.isRequired,
};

export default createContainer(() => {
  return {
    chatMessages: ChatMessages.find({"createdAt":{$ne:null}}).fetch(),
  };
}, Chat);
