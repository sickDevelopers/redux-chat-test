import React, { PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Rooms } from '../../model/Rooms.js';

var ChatRoom = React.createClass({
  render() {
    return (
      <div className="chat-room">
        Room
      </div>
    )
  }
})


module.exports = ChatRoom;
