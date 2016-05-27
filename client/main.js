import React from 'react';
import ReactDOM from 'react-dom';

import Chat from './chat/Chat.jsx';
import Room from './fight/FightRoom.jsx';

Meteor.startup(() => {
  ReactDOM.render(<Chat />, document.getElementById('app'));
})
